<template>
  <el-menu
    :default-active="$route.path"
    class="sidebar"
    @open="handleOpen"
    @close="handleClose">
    <el-submenu :index="subNavList.id" :key="subNavList.id" v-for="subNavList in navList" :disabled="subNavList.disabled">
        <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{subNavList.title}}</span>
        </template>
        <!-- <el-submenu :index="subNav.index" :key="subNav.index" v-for="subNav in subNavList.subNavList"> -->
            <!-- <template slot="title">{{subNav.navTitle}}</template> -->
        <el-menu-item
        :index="item.index"
        :key="item.index"
        v-for="item in subNavList.subNavList"
        @click="$emit('navClick', item.index)">{{item.title}}</el-menu-item>
        <!-- </el-submenu> -->
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'Sidebar',
  props: ['navList'],
  methods: {
    handleOpen () {},
    handleClose () {}
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  text-align: left;
}
.el-menu {
  border: 0;
}
</style>
