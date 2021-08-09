<template>
  <div id="error">
    <h1>呐呐呐</h1>
    <el-button @click="errorSwitch(index)" v-for="(item, index) in error" v-bind:key="index">
      {{ index }}:{{ item }}
    </el-button>
    <h2>{{ errorType }}</h2>
  </div>
</template>

<script>
import {ref, reactive, toRefs} from 'vue'

export default {
  name: 'error',
  setup() {
    const data = reactive({
      error: ['网络错误','客户端错误'],
      errorType: '',
      errorSwitch: (index) => {
        data.errorType = data.error[index]
      }
    })
    // const redData = toRefs(data)
    // const error = ref(["网络错误","客户端错误"])
    // const errorType = ref("")
    // const errorSwitch = (index) => {
    //   errorType.value = error.value[index]
    // }
    return {
      // error,
      // errorType,
      // errorSwitch,
      // data
      ...toRefs(data)
    }
  }
}
</script>

<style>

</style>