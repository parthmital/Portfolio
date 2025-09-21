import { render } from "preact";
import { App } from "./app.jsx";
const neonPalette = [
	"#bfff00", // Lime Green
	"#39ff14", // Vivid Green
	"#00ffff", // Aqua / Cyan
	"#1e90ff", // Electric Blue
	"#ff00ff", // Magenta
	"#ff5afd", // Hot Pink
	"#ff073a", // Neon Red
	"#ff9900", // Neon Orange
	"#f5f500", // Bright Yellow-Green
	"#00ff9f", // Teal Green
	"#8a2be2", // Electric Purple
	"#00bfff", // Deep Sky Blue
];
const neonColor = neonPalette[Math.floor(Math.random() * neonPalette.length)];
document.documentElement.style.setProperty("--accent-color", neonColor);
console.log(
	"%cAccent Color →",
	`color: ${neonColor}; font-weight: bold;`,
	neonColor
);
render(<App />, document.body);
