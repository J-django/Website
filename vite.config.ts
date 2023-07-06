/*
 * @Author: 15623702696Jkn 2458186212@qq.com
 * @Date: 2023-02-18 22:37:36
 * @LastEditors: 15623702696Jkn 2458186212@qq.com
 * @LastEditTime: 2023-03-23 21:11:14
 * @FilePath: \website\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname);
  return {
    base: "/",
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    plugins: [
      vue(),
      createHtmlPlugin({
        inject: {
          data: {
            title: env.VITE_APP_Title
          }
        }
      })],
    server: {
      https: false,
      host: "0.0.0.0",
      port: 10020,
      open: true,
      cors: true,
      proxy: {
        "/api": {
          target: "http://localhost:10021",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      }
    }
  }
});
