<template>
  <div class="layout-page">
    <div class="layout-top">
      <el-row>
        <el-col :span="4"><div class="title">博客后台管理系统</div></el-col>
        <el-col :offset="16" :span="4">
          <div class="user">
            <el-avatar :size="50" :src="userStore.userProfile?.photo" />
            <span>{{ userStore.userProfile?.name }}</span>
            <span class="logout" @click="onLogout">退出</span>
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
import router from '@/router'
import { useUserStore } from '@/stores'
import { ElMessageBox } from 'element-plus'
import { onMounted } from 'vue'
const userStore = useUserStore()

onMounted(async () => {
  await userStore.fetchUserProfile()
  console.log(userStore.token)
})
const onLogout = async () => {
  await ElMessageBox.confirm('您确定退出吗？')
  userStore.logout()
  router.replace('/login')
}
</script>
<style lang="scss" scoped>
.layout-page {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.layout-top {
  height: 100px;
  background-color: #00569a;
  padding: 10px;
}
.layout-main {
  display: flex;
  height: calc(100vh - 100px);
  overflow: auto;
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
  .logout {
    cursor: pointer;
    color: #0094ff;
  }
}
.layout-right {
  flex: 1;
  height: 100%;
}
</style>
