<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
// @ts-expect-error 解决模块导出成员问题
import type { IDomEditor } from '@wangeditor/editor'
import { getChannels, publishArticle, updateArticle, uploadImage } from '@/services/article'
import type { Channels, NewArticle } from '@/types'
import { ElMessage } from 'element-plus'
import router from '@/router'
import { useRoute } from 'vue-router'
import { getDetailById } from '@/services/user'
const route = useRoute()
const channels = ref<Channels[]>([])

const form = ref<NewArticle>({
  title: '',
  channel_id: 0,
  content: '',
  cover: { images: [], type: 0 },
})

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 定义InsertFnType类型
type InsertFnType = (url: string, alt: string, href: string) => void

// 定义编辑器配置项类型
interface MenuConfItem {
  server?: string
  customUpload?: (file: File, insertFn: InsertFnType) => Promise<void>
  [key: string]: unknown
}

// 定义IEditorConfig接口
interface IEditorConfig {
  MENU_CONF?: Record<string, MenuConfItem>
  [key: string]: unknown
}

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
    const res = await uploadImage(file)
    insertFn(res.url, '', '')
    console.log('rrr', res)
  },
}
// 内容 HTML
const valueHtml = ref('<p>hello</p>')

// 模拟 ajax 异步获取内容
onMounted(async () => {
  const res = await getChannels()
  channels.value = res
  const data = route.params
  if (data.id) {
    const res = await getDetailById(data.id as string)
    form.value = res

    editorRef.value.setHtml(res.content)
  }
})

const toolbarConfig = {}

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor: IDomEditor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
const onPublish = async () => {
  form.value.content = editorRef.value.getHtml()
  form.value.cover = { images: [], type: 0 }

  if (route.params.id) {
    // 编辑
    await updateArticle(form.value, route.params.id as string)
  } else {
    // 验证表单合法性
    await publishArticle(form.value)
  }

  ElMessage.success('操作成功')
  router.back()
}
</script>

<template>
  <div class="article-add-page">
    <div class="tool">
      <el-button type="primary" @click="onPublish">发布</el-button>
    </div>
    <div class="form">
      <el-form>
        <!-- 标题 -->
        <el-form-item label="标题">
          <el-input placeholder="标题" v-model="form.title"></el-input>
        </el-form-item>
        <!-- 频道 -->
        <el-form-item label="频道">
          <el-select placeholder="请选择频道" v-model="form.channel_id">
            <el-option
              v-for="item in channels"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 分类 -->
        <!-- 封面 -->
      </el-form>
    </div>
    <div style="border: 1px solid #ccc">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
      />
      <Editor
        style="height: 500px; overflow-y: hidden"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        @onCreated="handleCreated"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.article-add-page {
  padding: 20px;
  .tool {
    padding: 20px 0;
  }
  height: 100%;
  overflow: auto;
}
</style>
