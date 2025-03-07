<template>
  <div class="layout-page">
    <div class="layout-top">
      <el-row>
        <el-col :span="4"><div class="title">博客后台管理系统</div></el-col>
        <el-col :offset="16" :span="4">
          <div class="user">
            <el-avatar
              :size="50"
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            />
            <span>管理员</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="layout-main">
      <div class="layout-left">
        <Left-Menu></Left-Menu>
      </div>
      <div class="layout-right">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import LeftMenu from '@/layout/LeftMenu.vue'
</script>
<style lang="scss" scoped>
.layout-page {
  width: 100vw;
  height: 100vh;
  overflow: auto;
}
.layout-top {
  height: 100px;
  background-color: #00569a;
  padding: 10px;
}
.layout-main {
  display: flex;
  height: calc(100vh - 100px);
}
.layout-left {
  width: 200px;
  background-color: #004dd7;
}
.title {
  color: #fff;
  font-size: 30px;
}
.user {
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin-left: 10px;
    color: #fff;
  }
}
</style>
