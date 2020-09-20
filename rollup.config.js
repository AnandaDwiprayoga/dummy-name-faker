import json from "@rollup/plugin-json";
import babel from "@rollup/plugin-babel";
// import commonjs from "@rollup/plugin-commonjs";
import commonjs from "rollup-plugin-commonjs";

export default {
  // input ini sebagai gateway tempat fungsi fungsi, atau kalau di webpack bisa disebut entry
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    // esm kepanjangan dari esmodule
    format: "esm",
    name: "nama"
  },
  plugins: [
    // plugin json ini digunakan karena by defult rollup tidak support export dengan format file json
    json(),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "inline"
    }),
    commonjs()
  ]
};
