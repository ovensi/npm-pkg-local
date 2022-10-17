import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

const config = defineConfig({
  plugins: [vue(), vueJsx()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.tsx"),
      name: "myCom",
      fileName: "my-com",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});

export default config;
