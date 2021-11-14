import vue from "rollup-plugin-vue";
import commonjs from "rollup-plugin-commonjs";
import css from "rollup-plugin-css-only";

export default {
	input: "src/index.js",
	output: {
		format: "iife",
		sourcemap: true,
		file: "dist/bundle.js",
	},
	plugins: [css(), vue(), commonjs()],
};
