<template>
  <div class="admin">
    <el-container>
      <el-header style="padding-top: 7px;padding-left: 10px;margin: 0 10px;">
       <Navbar/>
      </el-header>
      <el-main>
        <div class="container">
          <el-tabs v-model="tabs.activeName">
            <el-tab-pane label="作业管理" name="first">
              <Management></Management>
            </el-tab-pane>
            <el-tab-pane label="发布作业" name="publish">

            </el-tab-pane>
            <el-tab-pane label="设置" name="setting">

            </el-tab-pane>
          </el-tabs>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Card from '@/components/Card.vue'
import Management from '@/components/Admin/Management.vue'
import { reactive, getCurrentInstance, onMounted } from 'vue'

export default {
  setup() {
    const { proxy } = getCurrentInstance()
    const tabs = reactive({
      activeName: 'first'
    })

    return {
      tabs,
    }
  },
  components: {
    Navbar,
    Card,
    Management,
  }
}
</script>

<style>
.admin {
  max-width: 1200px;
  margin: auto;
}

.container {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #e4e7ed;
}
</style>