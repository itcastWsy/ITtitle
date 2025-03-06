<script setup lang="ts"></script>

<template>
  <div class="layout-page">
    <div class="layout-top"></div>
    <div class="layout-main">
      <div class="layout-left">
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
      </div>
      <div class="layout-right">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-page {
  width: 100vw;
  height: 100vh;
  overflow: auto;
}
.layout-top {
  height: 100px;
  background-color: #00569a;
}
</style>
