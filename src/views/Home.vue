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
          <el-skeleton :rows="0" animated v-bind:loading="loadingNotice" />
          {{ text }}
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
              <el-button type="success" plain style="width: 100%;" @click="showAll()">展开全部</el-button>
            </el-col>
            <el-col :span="12">
              <el-button type="danger" plain style="width: 100%;" @click="hideAll()">收起全部</el-button>
            </el-col>
          </el-row>
          <el-result :icon="homeWorkResult.icon" :title="homeWorkResult.title" :subTitle="homeWorkResult.subTitle">
            <!-- <template #extra>
              <el-button type="primary" size="medium">返回</el-button>
            </template> -->
          </el-result>
          <el-collapse v-model="activeNames" v-for="(item,index) in homeWork" :key="item">
            <el-collapse-item :title=item.title :name=index>
              <!-- <div>{{ item.list }}</div> -->
              <!-- <ul>
                <li v-for="items in item.list" :key="items">
                  {{ items.text }}
                </li>
              </ul> -->

              <el-table
                :data="item.list"
                style="width: 100%"
                >
                <el-table-column
                  prop="text"
                  label="书本"
                  width="130">
                </el-table-column>
                <el-table-column
                  prop="pages"
                  label="页数"
                  width="80">
                </el-table-column>
                <el-table-column
                  prop="remarks"
                  label="备注"
                  >
                </el-table-column>
                
              </el-table>
            </el-collapse-item>
          </el-collapse>
        </Card>

        <Card title="快捷入口" icon="eva-cube-outline">
           <el-collapse>
            <el-collapse-item title="隐藏内容" name="1">
              <p>光泽县<b>教育局</b>客服电话：0599-7922258</p>
              <p>南平市<b>教育局</b>客服电话：0599-8855926</p>
              <p>福建省<b>教育厅</b>客服电话：0591-87091616</p>
              <p>全国<b>教育部</b>通用电话：010-66092315/3315</p>
              <p>全国<b>教育部</b>通用邮箱：12391@moe.edu.cn </p>
              <hr>
              <p><el-link type="primary" href="https://www.bilibili.com/video/BV1db4y1X7Vj">举报注意事项|老师针对指南</el-link></p>
            </el-collapse-item>
           </el-collapse>
        </Card>
        <Card title="测试区域" icon="eva-cube-outline">
          <Error></Error>
        </Card>
      </el-main>
      <el-footer style="height: 40px;">
        <Footer/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import {ref,reactive,toRefs,onMounted,getCurrentInstance} from 'vue'
const axios = require('axios');
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Hello from '@/components/Hello.vue'
import Card from '@/components/Card.vue'
import Error from '@/components/Error.vue'
import Result from '@/components/Result.vue'

import {nowDate, getNowDate} from '../hooks/getNowDate'
// import { 
//   Edit,
//   } from '@element-plus/icons'

export default {
  name: 'Home',
  setup() {
    const { proxy } = getCurrentInstance()
    // 作业列表
    const homeWorkList = reactive({
      loadingNotice: true,
      homeWork: '',
      activeNames: [],
      showAll: () => {
        homeWorkList.activeNames = ['0','1','2','3','4','5','6','7']
      },
      hideAll: () => {
        homeWorkList.activeNames = []
      }
    })

    // 公告
    const notice = reactive({
      loadingNotice: true,
      text: ''
    })

    // 用户信息
    const userInfo = ref({
      column: 2
    })

    const homeWorkResult = reactive({
      icon: 'info',
      title: '未找到数据',
      subTitle: '无信息',
      update: (icon,title,subTitle) => {
        homeWorkResult.icon.value = icon
        homeWorkResult.title.value = title
        homeWorkResult.subTitle.value = subTitle
      }
    })

    onMounted(() => {
      // 获取日期
      getNowDate()

      // 请求公告
      proxy.$axios
        .get('/notice')
        .then(response => {
          // console.log(this.$gwConfig)
          console.log(response)
          notice.loadingNotice = false
          notice.text = response.data
        })
        .catch(error => {
          console.log(error)
        })
      
      // 请求作业列表
      proxy.$axios
        .get('/get_home_work/'+nowDate.value)
        .then(response => {
          // console.log(this.$gwConfig)
          console.log(response)
          if (response.data.code == 200){
            console.log(response)
            homeWorkResult.icon = "success"
            homeWorkResult.title = '今日作业已发布'
            homeWorkResult.subTitle = ''
            homeWorkList.loadingNotice = false
            homeWorkList.homeWork = response.data.text.home_work
          }else {
            homeWorkResult.icon = 'warning'
            homeWorkResult.title = '未发布'
            homeWorkResult.subTitle = '此平台为学生制作第三方平台，未发布不代表无作业，一切以老师布置为准！'
            // homeWorkResult.update('warning','2','3')
          }
          
        })
        .catch(error => {
          console.log(error)
        })
    })
    return {
      ...toRefs(homeWorkList),
      ...toRefs(notice),
      userInfo,
      homeWorkResult,
    }
  },
  components: {
    Navbar,
    Footer,
    Hello,
    Card,
    Error,
    Result,
    // Edit,
  },
}
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: auto;
}
</style>