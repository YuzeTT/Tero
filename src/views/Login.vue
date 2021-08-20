<template>
  <div>
    <div class="header">
      <span class="title">极信认证中心</span>
    </div>
    
    <div style="margin:20px;padding-top:20px">
      <div class="box">
        <span class="subtitle">登录</span>
        <span class="describe">使用极信账号</span>
        <el-input placeholder="请输入账号" v-model="loginInput.id">
          <template #append>@os.uzett.com</template>
        </el-input>
        <div style="margin: 10px"></div>
        <el-input placeholder="请输入密码" v-model="loginInput.password" show-password></el-input>
        <div style="margin: 10px"></div>
        <el-button type="success" class="button">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, getCurrentInstance, onMounted } from 'vue'

export default {
  setup() {
    const loginInput = reactive({
      id: '',
      password: ''
    })
    return {
      loginInput
    }
  }
}
</script>

<style>
.header {
  background: url('https://jui.org/themes/default/images/header_bg.png') repeat-x;
  background-color: #102947;
  height: 50px;
  background-repeat: no-repeat;
  background-position: 100% -50px;
}

.title {
  text-align: center;
  display:block;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 50px;
  color: #fff;
}

.subtitle {
  text-align: center;
  display:block;
  font-size: 1.9rem;
  padding-bottom: 10px;
  color: #202124;
}

.describe {
  text-align: center;
  display:block;
  color: #202124;
  padding-bottom: 20px;
}

.box {
  background-color: #fff;
  margin: 0 auto;
  max-width: 500px;
  padding: 20px;
  border-radius: 6px;
}

.button {
  width: 100%;
  background-color: #07c160;
  border: none;
}

.button:focus, .button:hover {
  background-color: #07c160;
  border: none;
}

.button:active {
  background-color: #0B6F3B;
  border: none;
}
</style>