const esbuild = require("esbuild");

esbuild.buildSync({
  entryPoints: ["src/main.ts"],
  bundle: true,
  outfile: "dist/main.js",
});
