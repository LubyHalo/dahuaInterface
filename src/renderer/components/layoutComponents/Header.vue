<template>
  <div class="header">
    <div class="header-logo">
      <img src="~/assets/logo.png" alt="大华接口" srcset="">
      <span class="header-logo-title">大华接口</span>
    </div>
    <el-menu
      default-active="1"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/task">任务管理</router-link></el-menu-item>
      <el-menu-item index="3"><router-link to="/interface">接口管理</router-link></el-menu-item>
      <!-- <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  height: 100%;
  padding-left: 0;
}
.header-logo {
  width: 200px;
  // margin-right: 25px;
  img {
    // width: 100%;
    height: 100%;
  }
  .header-logo-title {
    display: inline-block;
    vertical-align: top;
    color: #ddd;
    font: {
      size: 20px;
      weight: bold;
    }
    cursor: default;
  }
}
</style>
