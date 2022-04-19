import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import typescript2  from 'rollup-plugin-typescript2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    typescript2({
      check: false,
      include: ["src/components/*.vue"],
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
          sourceMap: true,
          declarationMap: true,

        },
        exclude: ["vite.config.ts", "main.ts"]
      }
    })
  ],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: "src/ViewPlugin.ts",
      formats: ["cjs", "es"],
      name: "ViewPlugin",
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs")
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        },
      },
    },
  },
});
