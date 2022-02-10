import { UserConfigExport, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    server: {
      host: '0.0.0.0'
    },
    resolve: {
      alias: {
        '@': resolve(process.cwd(), '.', 'src')
      }
    },
    plugins: [
      vue(),
      AutoImport({
        // targets to transform
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/, /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        // global imports to register
        imports: ['vue', 'vue-router'],
        dts: 'src/types/auto-import.d.ts'
      }),
      Components({
        resolvers: [
          ElementPlusResolver()
        ]
      })
    ],
    build: {
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    }
  }
}
