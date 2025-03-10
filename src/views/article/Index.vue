<script setup lang="ts">
import router from '@/router'
import { deleteArticle, getArticles } from '@/services/article'
import type { ArticleItem, ArticleParam } from '@/types'
import { ArticleStatusMap } from '@/utils'
import dayjs from 'dayjs'
import { ElMessage, ElMessageBox } from 'element-plus'
import { onMounted, reactive, ref, watch } from 'vue'
dayjs.locale('zh-cn')

const form = reactive<ArticleParam>({
  status: '',
  channel_id: '',
  begin_pubdate: '',
  end_pubdate: '',
  page: 1,
  per_page: 10,
})
const tableData = ref<ArticleItem[]>([])
const dateArr = ref<Date[]>([])
watch(dateArr, () => {
  if (dateArr.value.length === 2) {
    form.begin_pubdate = dayjs(dateArr.value[0]).format('YYYY-MM-DD')
    form.end_pubdate = dayjs(dateArr.value[1]).format('YYYY-MM-DD')
  }
})

const onSearch = async () => {
  const res = await getArticles(form)
  tableData.value = res.results
}

onMounted(() => {
  onSearch()
})

const onDelete = (id: string) => {
  ElMessageBox.confirm('确认删除该文章吗?').then(async () => {
    await deleteArticle(id)
    ElMessage.success('删除成功')
    onSearch()
  })
}
</script>

<template>
  <div class="article-index-page">
    <el-row type="flex" justify="space-between">
      <span>文章状态</span>
      <el-button type="primary" @click="router.push('/article/add')">新增文章</el-button>
    </el-row>

    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="文章状态">
        <el-select placeholder="全部" clearable v-model="form.status">
          <el-option label="草稿" value="0" />
          <el-option label="待审核" value="1" />
          <el-option label="审核失败" value="2" />
          <el-option label="全部" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="发布日期">
        <el-date-picker
          type="daterange"
          v-model="dateArr"
          range-separator="To"
          start-placeholder="起始日期"
          end-placeholder="截止日期"
          size="default"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSearch">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" label="序号" width="80px" />
      <el-table-column prop="title" label="标题" />
      <el-table-column label="状态">
        <template #default="scope">
          <span>{{ ArticleStatusMap[scope.row.status as keyof typeof ArticleStatusMap] }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="comment_count" label="评论数" />
      <el-table-column prop="pubdate" label="发布时间" />

      <el-table-column prop="like_count" label="点赞数" />
      <el-table-column prop="read_count" label="阅读数" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="primary" @click="router.push(`/article/add/${scope.row.id}`)"
            >编辑</el-button
          >
          <el-button type="danger" @click="onDelete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style lang="scss" scoped>
.article-index-page {
  padding: 10px;
}
.el-select {
  --el-select-width: 120px;
}
</style>
