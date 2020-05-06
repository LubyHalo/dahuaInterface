<template>
  <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
    <el-breadcrumb-item v-for="(item, index) in paramsList" :key="index" :to="{ path: item.path}">{{item.meta.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: ['paramsList']
}
</script>

<style scoped>
.breadcrumb {
  padding-bottom: 15px;
}
</style>
