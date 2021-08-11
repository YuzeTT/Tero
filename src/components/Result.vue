<template>
  <div>
    <div class="result">
      <div class="top">
        <i class="eva icon" :class="head.icon" :style="head.style"></i>
      </div>
      <div class="buttom">
        <h1>{{ title }}</h1>
        <p>{{ subTitle }}</p>
      </div>
    </div>
    <!-- <el-result :icon="icon" :title="title" :subTitle="subTitle" style="" /> -->
  </div>
</template>

<script>
import { reactive,onMounted, watch } from 'vue';
export default {
  name: "Result",
  props: {
    icon: String,
    title: String,
    subTitle: String,
    color: String,
  },
  setup(props) {
    const head = reactive({
      icon: 'eva-question-mark-outline',
      style: {
        color: '#FAFAFA',
        backgroundColor: '#BFBFBF'
      },
      setColor: () => {
        switch(props.color){
          case 'black':
            head.icon = 'eva-cloud-download-outline'
            head.style.color = '#FAFAFA'
            head.style.backgroundColor = '#BFBFBF'
            break
          case 'green':
            head.icon = 'eva-checkmark-outline'
            head.style.color = '#52C41A'
            head.style.backgroundColor = '#D9F7BE'
            break
          case 'yellow':
            head.icon = 'eva-loader-outline'
            head.style.color = '#FA8C16'
            head.style.backgroundColor = '#FFE7BA'
            break
          case 'red':
            head.icon = 'eva-close-outline'
            head.style.color = '#F5222D'
            head.style.backgroundColor = '#FFCCC7'
            break
        }
      }
    })

    watch(props,(n,o)=>{
      head.setColor()
    })

    onMounted(() => {
      head.setColor()
    })

    return {head}
  },
  
};
</script>

<style scoped>
.el-result__title p {
  color: #F2A20C;
  font-weight: 600;
}

.result {
  margin: 0 auto;
  padding: 40px 0;
}

.top {
  /* background-color: #FEF0F0; */
  width: 280px;
  /* border-left: 5px solid #F56C6C; */
  text-align: center;
  margin: 0 auto;
}

.buttom {
  text-align: center;
  margin: 0 auto;
}

.icon {
  font-size: 50px;
  padding: 5px;
  vertical-align: -15%;
  color: #F5222D;
  background-color: #FFCCC7;
  border-radius: 50%;
}

</style>