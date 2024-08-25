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
import postcssRem from 'postcss-rem'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname);
  return {
    base: "/",
    plugins: [
      vue(),
      createHtmlPlugin({
        inject: {
          data: {
            title: env.VITE_APP_Title
          }
        }
      })
    ],
    // ******resolver配置******
    resolve: {
      alias: {
        "@": resolve(__dirname, './src'),
      }
    },
    // ******开发服务器配置******
    server: {
      https: false,
      host: "0.0.0.0",
      port: 10020,
      open: true,
      cors: true,
      proxy: {
        "/api": {
          target: "https://dashboard.algolia.com",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      }
    },
    css: {
      postcss: {
        plugins: [
          postcssRem({
            name: "rem",
            precision: 6
          }),
        ]
      }
    },
    // ******项目构建配置******
    build: {
      target: 'modules', //设置最终构建的浏览器兼容目标  //es2015(编译成es5) | modules
      outDir: 'dist', // 构建得包名  默认：dist
      assetsDir: 'assets', // 静态资源得存放路径文件名  assets
      sourcemap: false, //构建后是否生成 source map 文件
      minify: 'esbuild', // 项目压缩 :boolean | 'terser' | 'esbuild'
      chunkSizeWarningLimit: 1000, //chunk 大小警告的限制（以 kbs 为单位）默认：500
      cssTarget: 'chrome61' //防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制符号的形式  (要兼容的场景是安卓微信中的 webview 时,它不支持 CSS 中的 #RGBA 十六进制颜色符号)
    },
  }
});
