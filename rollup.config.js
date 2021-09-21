import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";
import { babel } from "@rollup/plugin-babel";
import summary from "rollup-plugin-summary";
import replace from "@rollup/plugin-replace";
import postcss from 'rollup-plugin-postcss'

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/main.ts",
  output: {
    file: "public/bundle.js",
    format: "esm",
    sourcemap: true,
  },
  onwarn(warning) {
    if (warning.code !== "THIS_IS_UNDEFINED") {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    replace({ "Reflect.decorate": "undefined" }),
    resolve(),
    commonjs(),
    postcss(),
    terser({
      ecma: 2017,
      module: true,
      warnings: true,
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
    typescript({
      include: ["src/**/*.ts"],
    }),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
    summary(),
    production && terser({ format: { comments: false } }),
  ],
};
