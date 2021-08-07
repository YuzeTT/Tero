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
        
        <!-- </el-svg-icon>       -->
        <el-dropdown style="position: absolute;right: -18px;top:10px">
          <span class="el-dropdown-link">
            <!-- <more-filled style="width: 2em; height: 2em; color:#004DE4" /> -->
            <i class="eva eva-more-vertical-outline" style="font-size:2rem; color:#004DE4"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu style="">
              <el-dropdown-item>
                <i class="eva eva-book-outline" style="font-size:1rem;vertical-align: -16%" />
                主页
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="eva eva-person-done-outline" style="font-size:1rem;vertical-align: -16%" />
                绑定信息
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="eva eva-cube-outline" style="font-size:1rem;vertical-align: -16%" />
                管理
              </el-dropdown-item>
              <el-dropdown-item divided>
                <i class="eva eva-info-outline" style="font-size:1rem;vertical-align: -16%" />
                关于
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
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