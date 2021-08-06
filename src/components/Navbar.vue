<template>
  <div>
    <el-row>
      <el-col :span="8">
        <!-- <el-icon :size="size" :color="color">
          <edit />
        </el-icon> -->
        <!-- <el-svg-icon>
          <stopwatch style="width: 2em; height: 2em; margin: 10px;" />
        </el-svg-icon>
                -->
        <div class="title">Tero</div>
      </el-col>
      <el-col :span="8">
        
      </el-col>
      <el-col :span="8">
        <!-- <el-svg-icon> -->
        <more-filled style="width: 2em; height: 2em; position: absolute;right: 0px;padding-top:9px;color:#463CA3" />
        <!-- </el-svg-icon>       -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { 
  Edit,
  Stopwatch,
  MoreFilled,
  } from '@element-plus/icons'

export default {
  name: 'Home',
  components: {
    // HelloWorld
    Edit,
    Stopwatch,
    MoreFilled
  }
}
</script>

<style scoped>
.title {
  text-align: left;
  font-size: 30px;
  font-weight: 600;
  line-height: 53px;
  color: #3F444E;
}
</style>