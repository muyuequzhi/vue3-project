/// <reference types="vite/client" />
declare module '*.js'
declare module 'pinia-plugin-persist'
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
