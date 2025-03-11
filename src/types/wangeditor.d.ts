declare module '@wangeditor/editor-for-vue' {
  import { Component } from 'vue'
  export const Editor: Component
  export const Toolbar: Component
}

declare module '@wangeditor/editor' {
  export type InsertFnType = (url: string, alt?: string, href?: string) => void
}
