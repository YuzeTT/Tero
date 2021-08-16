<template>
  <div>
    <!-- <h1>
      {{ homeWork.list }}
    </h1> -->
    <div style="overflow:scroll;">
      <table border="1" class="table">
        <tr>
          <th colspan="5">作业列表</th>
        </tr>
        <tr class="table_title">
          <th>发布日期</th>
          <th>创建</th>
          <th>更新</th>
          <th>科目列表</th>
          <th>操作</th>
        </tr>
        <tr v-for="item in homeWork.list" :key="item">
          <td>
            {{ item.date }}
          </td>
          <td>
            {{ item.create_user }}
          </td>
          <td>
            {{ item.update_user }}
          </td>
          <td style="min-width:200px">
            <span v-for="(items, key) in item.home_work" :key="key">
              <span>-</span>{{ items.title }}
            </span>
          </td>
          <td>
            <a href="">查看</a>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { reactive, getCurrentInstance, onMounted } from 'vue'

export default {
  setup() {
    const { proxy } = getCurrentInstance()
    const tabs = reactive({
      activeName: 'first'
    })

    const homeWork = reactive({
      list: ''
    })

    onMounted(()=>{
      proxy.$axios
        .get('/get_home_work_list')
        .then(response => {
          // console.log(this.$gwConfig)
          console.log(response)
          // notice.loadingNotice = false
          homeWork.list = response.data.list
        })
        .catch(error => {
          console.log(error)
        })
    })

    return {
      tabs,
      homeWork
    }
  },
}
</script>

<style>
.table {
  /* width: 100%; */
  /* min-width: 400px; */
  margin: 0 auto;
}

.table_title {
  background-color: #D7E1FB;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}
 
td,th {
    padding: 2px;
}

</style>