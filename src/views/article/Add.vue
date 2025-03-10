<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import type { IEditorConfig } from '@wangeditor/editor'
import { uploadImage } from '@/services/article'
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 初始化 MENU_CONF 属性
const editorConfig: Partial<IEditorConfig> = {
  // TS 语法
  // const editorConfig = {                       // JS 语法
  MENU_CONF: {},

  // 其他属性...
}
editorConfig.MENU_CONF!['uploadImage'] = {
  server: '/upload',
  async customUpload(file: File, insertFn: InsertFnType) {
    // TS 语法
    // async customUpload(file, insertFn) {                   // JS 语法
    // file 即选中的文件
    // 自己实现上传，并得到图片 url alt href
    // 最后插入图片
    // insertFn(url, alt, href)
    const res = await uploadImage(file)

    insertFn(res.url, '', '')
    console.log('rrr', res)
  },
}
// 内容 HTML
const valueHtml = ref('<p>hello</p>')

// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
  }, 1500)
})

const toolbarConfig = {}

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
const onPublish = () => {
  console.log('valueHtml', editorRef.value.getHtml())
}
</script>

<template>
  <div class="ddd-page">
    <el-button @click="onPublish">发布</el-button>
    <div style="border: 1px solid #ccc">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="height: 500px; overflow-y: hidden"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
