<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
// 当前激活的菜单
const activeMenu = computed(() => route.path)
</script>

<template>
  <div class="left-menu-page">
    <el-menu
      :default-active="activeMenu"
      class="el-menu-vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
      router
    >
      <el-menu-item index="/dashboard"> 数据统计 </el-menu-item>
      <el-menu-item index="/article"> 文章管理 </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.left-menu-page {
  height: 100%;
  background-color: #304156;
}
</style>
