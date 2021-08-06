<template>
  <div>
    <el-card shadow="never" style="width: 100%;border-radius: 8px">
      下午好，
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hitokoto: ''
    }
  },
  mounted () {
    this.$axios
      .get('https://v1.hitokoto.cn/?encode=text')
      .then(response => {
        // console.log(this.$gwConfig)
        console.log(response)
        this.hitokoto = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style>

</style>