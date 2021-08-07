<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <el-container>
      <el-header style="padding-top: 7px;padding-left: 10px;margin: 0 10px;">
       <Navbar/>
      </el-header>
      <el-main style="padding-top:5px">
        <el-alert
          style="margin-bottom:30px;border-radius: 8px"
          effect="dark"
          title="警告：项目正在开发中。"
          type="warning"
          show-icon>
        </el-alert>
        <!-- <Hello/> -->
        <Card title="公告" icon="eva-smiling-face-outline">
          下午好
        </Card>

        <Card title="绑定信息" icon="eva-person-outline">
          <el-descriptions :column="userInfo.column">
            <el-descriptions-item label="姓名">**伟</el-descriptions-item>
            <el-descriptions-item label="绑定QQ">25****6965</el-descriptions-item>
            <el-descriptions-item label="权限">
              <el-tag size="small">管理员</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="学校">家里蹲中学</el-descriptions-item>
            <el-descriptions-item label="年级">
              <el-tag size="small">九年级</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="班级">
              <el-tag type="success" size="small">2班</el-tag>
            </el-descriptions-item>
          </el-descriptions>
        </Card>

        <Card title="作业" icon="eva-book-open-outline">
          <el-descriptions :column="userInfo.column">
            <el-descriptions-item label="更新时间">今日 20:56</el-descriptions-item>
            <el-descriptions-item label="更新者">2517746965</el-descriptions-item>
          </el-descriptions>
          <el-row :gutter="10">
            <el-col :span="12">
              <el-button type="success" plain style="width: 100%;">展开全部</el-button>
            </el-col>
            <el-col :span="12">
              <el-button type="danger" plain style="width: 100%;">收起全部</el-button>
            </el-col>
          </el-row>
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="语文" name="1">
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item title="数学" name="2">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </el-collapse-item>
            <el-collapse-item title="英语" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </el-collapse-item>
            <el-collapse-item title="历史" name="4">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
            <el-collapse-item title="地理" name="5">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
            <el-collapse-item title="政治" name="6">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
            <el-collapse-item title="生物" name="7">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
          </el-collapse>
        </Card>
      </el-main>
      <el-footer>
        <Footer/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Hello from '@/components/Hello.vue'
import Card from '@/components/Card.vue'
// import { 
//   Edit,
//   } from '@element-plus/icons'

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
    Hello,
    Card,
    // Edit,
  },
  data() {
    return {
      activeNames: [],
      userInfo: {
        column: 2,
      }
    }
  },
}
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: auto;
}
</style>