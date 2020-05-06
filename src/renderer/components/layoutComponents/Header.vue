<template>
  <div class="header">
    <div class="header-logo">
      <img src="~/assets/logo.png" alt="大华接口" srcset="">
      <span class="header-logo-title">大华接口</span>
    </div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/task">任务管理</el-menu-item>
      <el-menu-item index="/interface">接口管理</el-menu-item>
      <el-menu-item index="/system">系统功能</el-menu-item>
    </el-menu>
    <div class="header-user"></div>
  </div>
</template>

<script>
export default {
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
      this.$router.push(key)
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
