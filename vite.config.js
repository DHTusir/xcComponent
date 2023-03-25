import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        math: "always", // 括号内才使用数学计算
        globalVars: {
          // 全局变量
          '@basic-color': '#459ed8', // 基础色
          '@font-color': '#333333', // 基础字体色
          '@bg-color': '#f7f7f7' // 测试less
        },
    },
  },
  },
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 打包配置
  build: {
    sourcemap: false, //不开启镜像
    outDir: 'dist',
    assetsInlineLimit: 8192, // 小于 8kb 的导入或引用资源将内联为 base64 编码
    terserOptions: {
      compress: {
        // warnings: false,
        drop_console: true,  //打包时删除console
        drop_debugger: true, //打包时删除 debugger
        pure_funcs: ['console.log'],
      },
      output: {
        // 去掉注释内容
        comments: true,
      },
    },
    lib: {
      entry: resolve(process.cwd(), './packages/components/index.js'), // 设置入口文件
      name: 'xc-vue-mb', // 起个名字，安装、引入用
      fileName: (format) => `xc-vue-mb.${format}.js`, // 打包后的文件名
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'vant', 'vue-router'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'vue',
          vant: 'vant',
          'vue-router': 'vue-router',
        },
      },
      // output: { // html打包
      //   manualChunks(filePath) { //静态资源分拆打包
      //     if (filePath.includes('node_modules')) {
      //       // 如果这个文件路径，是来自 node_modules的，那么我们就进行发包
      //       return 'vendor';
      //     }
      //   }
      // }
    },
  }
})
