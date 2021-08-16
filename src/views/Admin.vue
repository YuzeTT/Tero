<template>
  <div class="admin">
    <el-container>
      <el-header style="padding-top: 7px;padding-left: 10px;margin: 0 10px;">
       <Navbar/>
      </el-header>
      <el-main>
        <el-tabs v-model="tabs.activeName">
          <el-tab-pane label="发布管理" name="first">
            <Card title="发布管理" icon="eva-cloud-upload-outline">
             
            </Card>
          </el-tab-pane>
          <el-tab-pane label="设置" name="second">
            <Card title="设置" icon="eva-settings-2-outline">
             
            </Card>
          </el-tab-pane>
        </el-tabs>
        
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Card from '@/components/Card.vue'
import { reactive } from '@vue/reactivity'

export default {
  setup() {
    const tabs = reactive({
      activeName: 'first'
    })

    return {
      tabs
    }
  },
  components: {
    Navbar,
    Card
  }
}
</script>

<style>
.admin {
  max-width: 800px;
  margin: auto;
}
</style>