/** Module boundaries. See ARCHITECTURE.md for the dependency rules. */
module.exports = {
	forbidden: [
		{
			name: "no-circular",
			severity: "error",
			from: {},
			to: { circular: true },
		},
		{
			name: "no-orphans",
			severity: "error",
			from: {
				orphan: true,
				pathNot: [
					"\.d\.ts$",
					"(^|/)[^/]+\.config\.[cm]?[jt]s$",
					"^\.dependency-cruiser\.cjs$",
					"^scripts/",
				],
			},
			to: {},
		},
		{
			name: "data-is-leaf",
			comment: "Content data must not depend on UI or browser code.",
			severity: "error",
			from: { path: "^src/data/" },
			to: { path: "^src/(?!data/)" },
		},
		{
			name: "lib-is-leaf",
			severity: "error",
			from: { path: "^src/lib/" },
			to: { path: "^src/(?!lib/)" },
		},
		{
			name: "hooks-are-ui-free",
			severity: "error",
			from: { path: "^src/hooks/" },
			to: { path: "^src/(components|data|site)/" },
		},
		{
			name: "site-is-ui-free",
			severity: "error",
			from: { path: "^src/site/" },
			to: { path: "^src/(components|hooks)/" },
		},
		{
			name: "primitives-are-content-free",
			comment: "Notebook primitives receive content via props only.",
			severity: "error",
			from: { path: "^src/components/notebook/" },
			to: { path: "^src/(components/(?!notebook/)|data|site|hooks)/" },
		},
		{
			name: "sections-independent",
			comment: "Page sections never import each other or layout.",
			severity: "error",
			from: { path: "^src/components/sections/([^/]+)\.tsx$" },
			to: { path: "^src/components/(layout/|sections/(?!ProjectCard))" },
		},
		{
			name: "use-notebook-barrel",
			severity: "error",
			from: { path: "^src/(?!components/notebook/)" },
			to: { path: "^src/components/notebook/(?!index\.ts$)" },
		},
	],
	options: {
		doNotFollow: { path: "node_modules" },
		tsConfig: { fileName: "tsconfig.json" },
		tsPreCompilationDeps: true,
	},
};
