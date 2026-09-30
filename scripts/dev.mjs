// Single cross-platform launcher for `npm run dev`.
// Installs dependencies when the lockfile changed, then runs the Vite dev server.
import { spawn, spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { createServer } from "node:net";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const port = 5173;
const stampPath = join(root, "node_modules", ".dev-lock-hash");
const viteCli = join(root, "node_modules", "vite", "bin", "vite.js");

function fail(message) {
	console.error(`\n[dev] ${message}`);
	process.exit(1);
}

function checkNode() {
	const [major, minor] = process.versions.node.split(".").map(Number);
	const ok =
		(major === 20 && minor >= 19) ||
		(major === 22 && minor >= 12) ||
		major > 22;
	if (!ok) {
		const { engines } = JSON.parse(
			readFileSync(join(root, "package.json"), "utf8"),
		);
		fail(`Node ${process.versions.node} is unsupported; need ${engines.node}.`);
	}
}

function ensureDependencies() {
	const hash = createHash("sha256")
		.update(readFileSync(join(root, "package-lock.json")))
		.digest("hex");
	const upToDate =
		existsSync(viteCli) &&
		existsSync(stampPath) &&
		readFileSync(stampPath, "utf8") === hash;
	if (upToDate) return;

	// npm sets npm_execpath to its CLI script when running `npm run dev`.
	const npmCli = process.env.npm_execpath;
	if (!npmCli) fail("Run this through `npm run dev`.");

	console.log("[dev] Installing dependencies (first run or lockfile changed)");
	const result = spawnSync(
		process.execPath,
		[npmCli, "ci", "--no-audit", "--no-fund", "--loglevel=error"],
		{ cwd: root, stdio: "inherit" },
	);
	if (result.status !== 0) fail("npm ci failed; see errors above.");
	writeFileSync(stampPath, hash);
	console.log("[dev] Dependencies ready.");
}

function assertPortFree() {
	return new Promise((resolve) => {
		const probe = createServer()
			.once("error", () =>
				fail(`Port ${port} is busy. Stop the process using it and retry.`),
			)
			.once("listening", () => probe.close(resolve))
			.listen(port, "localhost");
	});
}

function startVite() {
	const args = [viteCli, "--port", String(port), "--strictPort"];
	// Vite opens the browser once the server is listening; skipped in CI.
	if (!process.env.CI) args.push("--open");
	const child = spawn(process.execPath, args, { cwd: root, stdio: "inherit" });

	const stop = () => {
		if (child.exitCode !== null) return;
		if (process.platform === "win32") {
			spawnSync("taskkill", ["/pid", String(child.pid), "/T", "/F"], {
				stdio: "ignore",
			});
		} else {
			child.kill("SIGTERM");
		}
	};
	process.on("SIGINT", stop);
	process.on("SIGTERM", stop);
	child.on("exit", (code, signal) => {
		if (code && !signal) console.error(`[dev] Vite exited with code ${code}.`);
		process.exit(code ?? 0);
	});
}

checkNode();
ensureDependencies();
await assertPortFree();
startVite();
