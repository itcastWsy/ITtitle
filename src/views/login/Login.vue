<script setup lang="ts"></script>

<template>
  <div class="login-page">
    <div class="login-main">
      <div class="title">黑马头条后台管理系统</div>
      <el-form label-width="80px" class="login-form">
        <el-form-item label="手机号码">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input>
            <template v-slot:append>
              <span class="code-btn">获取验证码</span>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary">登录</el-button>
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
