<template>
  <div>
    <i class="eva eva-close-outline"></i>
    <el-result :icon="icon" :title="title" :subTitle="subTitle" style="" />
  </div>
</template>

<script>
export default {
  name: "Result",
  props: {
    icon: String,
    title: String,
    subTitle: String,
  },
};
</script>

<style>
.el-result__title p {
  color: #F2A20C;
  font-weight: 600;
}
</style>