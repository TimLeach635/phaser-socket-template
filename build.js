const esbuild = require("esbuild");

// server
esbuild.buildSync({
  entryPoints: ["src/main.ts"],
  bundle: true,
  platform: "node",
  outfile: "dist/main.js",
});

// client
esbuild.buildSync({
  entryPoints: ["src/client/client.ts"],
  bundle: true,
  platform: "browser",
  outfile: "dist/static/client.js",
});
