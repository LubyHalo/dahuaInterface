<template>
    <el-container>
    <el-aside width="201px" class="aside">
      <el-scrollbar style="height: 100%">
        <Sidebar :navList="navList" @navClick="getSystemContent"></Sidebar>
      </el-scrollbar>
    </el-aside>
    <el-main>
      <Breadcrumb :paramsList="paramsList"></Breadcrumb>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import Sidebar from 'components/layoutComponents/Sidebar'
import Breadcrumb from 'components/layoutComponents/Breadcrumb'
import { navList } from './nav'

export default {
  name: 'system',
  components: {
    Sidebar,
    Breadcrumb
  },
  data () {
    return {
      navList,
      paramsList: []
    }
  },
  methods: {
    getSystemContent () {
      this.$router.push('/system/user')
    },
    setBreadcrumbRoute () {
      this.paramsList = this.$route.matched.slice(1)
      // console.log(this.$route.matched.slice(1))
    }
  },
  created () {
    this.setBreadcrumbRoute()
  },
  watch: {
    $route () {
      this.setBreadcrumbRoute()
    }
  }
}
</script>

<style>
p {
  margin: 0;
}
.el-main {
  background-color: #fafafa;
}
.aside {
  border: solid 1px #dddddd;
}
</style>
