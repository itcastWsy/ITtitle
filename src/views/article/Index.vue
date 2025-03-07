<script setup lang="ts">
import { ref } from 'vue'

const status = ref('')
</script>

<template>
  <div class="article-index-page">
    <el-row type="flex" justify="space-between">
      <span>文章状态</span>
      <el-button type="primary">新增文章</el-button>
    </el-row>

    <el-row>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="文章状态">
          <el-select placeholder="全部" clearable v-model="status">
            <el-option label="草稿" value="0" />
            <el-option label="待审核" value="1" />
            <el-option label="审核失败" value="2" />
            <el-option label="全部" value="" />
          </el-select>
        </el-form-item>
        <el-form-item label="发布日期">
          <el-date-picker
            type="daterange"
            range-separator="To"
            start-placeholder="起始日期"
            end-placeholder="截止日期"
            size="default"
          />
        </el-form-item>
      </el-form>
    </el-row>
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
