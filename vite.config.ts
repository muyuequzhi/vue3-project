import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { stubFalse } from 'lodash'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  // 根据项目配置。可以配置在.env文件
  const prodMock = false
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
        @use "@/style/element/index.scss" as *;
        @use "@/style/common/var.scss" as *;
        `,
        },
      },
    },
    plugins: [
      vue(),
      vueJsx({
        // options are passed on to @vue/babel-plugin-jsx
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
      }),
      viteMockServe({
        // default
        mockPath: './src/mock/',
        localEnabled: command === 'serve',
        prodEnabled: command !== 'serve' && prodMock,
        // 监视文件更改
        watchFiles: true,
        // 开发环境不会执行这个 动态控制生产环境是否开启 mock 且在没有开启的时候 mock.js 不会被打包
        // 该代码会被注入到injectFile对应的文件的底部。默认injectFile为main.{ts,js}
        injectCode: `
            import { setupProdMockServer } from './mock/mockProdServer';
            setupProdMockServer();
        `,
      }),
    ],
    build: {
      rollupOptions: {
        external: ['viteMockServe'],
        // https://rollupjs.org/configuration-options/
      },
      sourcemap: 'hidden',
    },
    server: {
      port: 5173,
      open: true, // 启动时是否自动打开
      '/api': {
        target: 'http://localhost:5173',
        changeOrigin: true,
      },
    },
  }
})
