<script setup lang="ts">
import router from '@/router'
import { getArticles } from '@/services/article'
import type { ArticleItem, ArticleParam } from '@/types'
import { onMounted, reactive, ref, watch } from 'vue'

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
    form.begin_pubdate = dateArr.value[0].getTime().toString()
    form.end_pubdate = dateArr.value[1].getTime().toString()
  }
})

const onSearch = async () => {
  const res = await getArticles(form)
  tableData.value = res.results
}

onMounted(() => {
  onSearch()
})
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
      <el-table-column type="index" label="序号" />
      <el-table-column prop="title" label="标题" />
      <el-table-column prop="status" label="状态" />
      <el-table-column prop="comment_count" label="评论数" />
      <el-table-column prop="pubdate" label="发布时间" />
      <el-table-column label="封面">
        <template #default="scope">
          <img
            v-if="scope.row.cover.type !== '0'"
            :src="scope.row.cover.images"
            style="width: 100px; height: auto"
          />
          <span v-else>无封面</span>
        </template>
      </el-table-column>
      <el-table-column prop="like_count" label="点赞数" />
      <el-table-column prop="read_count" label="阅读数" />
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
