<template>
  <el-container class="layout-container">
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <!-- <el-aside width="200px">
        <Sidebar :navList='navList'></Sidebar>
      </el-aside>
      <el-container> -->
        <!-- <el-main> -->
          <router-view></router-view>
        <!-- </el-main> -->
        <!-- <el-footer height="30">copyright by xxb</el-footer> -->
      <!-- </el-container> -->
    </el-container>
  </el-container>
</template>

<script>
import { Header, Sidebar } from './layoutComponents'
import { navList } from 'container/dahuaApi/nav'

export default {
  name: 'Layout',
  components: {
    Header,
    Sidebar
  },
  data () {
    return {
      navList
    }
  },
  created () {
    console.log(navList)
  }
}
</script>

<style scoped>
.layout-container{
  height: 100%;
}

.el-header {
  background-color: rgb(84, 92, 100);
  color: #333;
  text-align: center;
  line-height: 60px;
  padding-left: 0;
}

.el-footer {
  /* background-color: #B3C0D1; */
  border: solid 1px #ddd;
  color: #666;
  font-size: .9rem;
  text-align: center;
  line-height: 30px;
}

.el-main {
  background-color: #f2f2f2;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
