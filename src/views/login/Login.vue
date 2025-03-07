<script setup lang="ts">
import router from '@/router'
import { getCode } from '@/services/user'
import { useUserStore } from '@/stores/index'
import { ElMessage } from 'element-plus'
import { reactive, ref } from 'vue'
const userStore = useUserStore()

const loginForm = reactive({
  mobile: '18612345678',
  code: '',
})

let isLoading = false
const onLogin = async () => {
  if (!loginForm.mobile) return ElMessage.error('请输入手机号')
  if (!loginForm.code) return ElMessage.error('请输入验证码')
  await userStore.fetchToken(loginForm)
  router.push('/')
}

const codeText = ref('获取验证码')
const onGetCode = () => {
  if (loginForm.mobile.length !== 11) return ElMessage.error('请输入正确的手机号')

  if (isLoading) return
  isLoading = true
  let times = 60

  const tid = setInterval(() => {
    times--
    codeText.value = times + 's' + '重新发送'
    if (times <= 0) {
      clearTimeout(tid)
      codeText.value = '获取验证码'
      isLoading = false
    }
  }, 1000)
  getCode('18612345678')
}
</script>

<template>
  <div class="login-page">
    <div class="login-main">
      <div class="title">黑马头条后台管理系统</div>
      <el-form label-width="80px" class="login-form">
        <el-form-item label="手机号码">
          <el-input v-model="loginForm.mobile"></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input v-model="loginForm.code">
            <template v-slot:append>
              <span class="code-btn" @click="onGetCode">{{ codeText }}</span>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-page {
  width: 100vw;
  height: 100vh;
  background-color: #2f6dff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.login-main {
  border-radius: 5px;
  background-color: #fff;
  padding: 0 50px;
}
.title {
  padding: 20px;
  font-size: 30px;
  color: #409eff;
}
.login-form {
  background-color: #fff;
  padding: 40px;
  border-radius: 5px;
}
.code-btn {
  cursor: pointer;
  color: #409eff;
  font-size: 14px;
  white-space: nowrap;
}
</style>
