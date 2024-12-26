import { defineConfig } from "vite";
import { readFileSync } from "fs";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      name: "littlejs-release-version",
      enforce: "pre",
      transform(_, id) {
        if (id.includes("littlejs.esm.js")) {
          if (process.env.NODE_ENV === "production") {
            const littlejsRelease = readFileSync(
              path.join(
                process.cwd(),
                "node_modules",
                "littlejsengine",
                "dist",
                "littlejs.esm.min.js"
              )
            );

            return littlejsRelease.toString();
          }
        }
      },
    },
  ],
});
