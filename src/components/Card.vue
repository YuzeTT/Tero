<template>
  <div>
    <el-card class="card" >
      <div class="title">
        <span class="title_span">
          <span><i class="eva" :class="icon" style="font-size:1.26rem;vertical-align: -15%"></i></span>
          <span style="padding-left:6px">{{ title }}</span>
        </span>
      </div>
      <div style="padding: 3px 0"></div>
      <slot></slot>
    </el-card>
  </div>
</template>

<script>
const eva = require('eva-icons');
// import * as eva from 'eva-icons';
eva.replace()

export default {
  props: {
    title: String,
    icon: String 
  }
}
</script>
<style scoped>
.card {
  width: 100%;
  border-radius: 8px;
  margin-top: 18px;
  /* position: absolute; */
  overflow: unset;
  margin-top: 30px;
  /* box-shadow: 0.5rem 0.875rem 2.375rem rgb(39 44 49 / 6%), 0.0625rem 0.1875rem 0.5 */
}

.title {
  margin-top: -32px;
  padding-bottom: 20px;
}

.title_span {
  padding: .5rem .9375rem;
  font-weight: 700;
  font-size: 1.06rem;
  background-color: #F2A20C;
  color: #fff;
  box-shadow: 0 0.5rem 0.625rem rgb(242 162 12 / 30%);
  border-radius: .5rem;
}
</style>