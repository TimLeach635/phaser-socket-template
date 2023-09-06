const esbuild = require("esbuild");

esbuild.buildSync({
  entryPoints: ["src/main.ts"],
  bundle: true,
  platform: "node",
  outfile: "dist/main.js",
});
