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
        <el-menu default-active="2">
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group>
              <template #title><span>Group One</span></template>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title><span>item four</span></template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <template #title>Navigator Two</template>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon><document /></el-icon>
            <template #title>Navigator Three</template>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <template #title>Navigator Four</template>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="layout-right">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'
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
