<script setup lang="ts"></script>

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
  padding: 10px;
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
