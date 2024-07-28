import { watch } from "chokidar";
import { build as _build } from "esbuild";
import { copySync, emptyDir } from "fs-extra/esm";

const dist = "../../dist";
async function build() {
  await _build({
    entryPoints: [{ in: "src/index.ts", out: "index" }],
    bundle: true,
    sourcemap: process.env.NODE_ENV === "development" ? "inline" : false,
    minify: process.env.NODE_ENV === "production",
    outdir: dist,
    platform: "browser",
    target: ["chrome58", "firefox57", "safari11"],
    tsconfig: "tsconfig.json"
  });

  copySync("public", dist, { dereference: true });
  const time = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).format(new Date());
  console.log(`✅ Build successful at ${time}`);
}

emptyDir(dist);

await build();

watch(["src", "public", "../ui"]).on("change", (path, stats) => {
  build();
  // console.log(path + " changed.");
});
