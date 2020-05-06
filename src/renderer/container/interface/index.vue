<template>
  <el-container>
    <el-aside width="201px">
      <el-scrollbar style="height: 100%">
        <Sidebar :navList='navList' @navClick="getInterfaceContent"></Sidebar>
      </el-scrollbar>
    </el-aside>
    <el-main>
      <!-- <pre style="overflow: hidden;">
        {{userInfo}}
      </pre> -->
      <el-row>
        <el-button type="primary" icon="el-icon-plus" circle @click="addEmptyCard"></el-button>
      </el-row>
      <el-row v-for="newcard in newCardList" :key="newcard.key">
        <ListCardItem :cardData='newcard' :isNewCard='true' @removeCard="removeEmptyCard"></ListCardItem>
      </el-row>
      <el-row :gutter="10" v-for="n in (Math.ceil(interfaceContent.length/colNum) || 0)" :key="currentNav + n">
        <el-col
          :span="24/colNum"
          v-for="(interfaceItem, index) in interfaceContent"
          :key="interfaceItem.title + index"
          v-if="index >= (n-1) * colNum && index < n * colNum">
          <ListCardItem :cardData='interfaceItem' @refreshData="getInterfaceContent(currentNav)"></ListCardItem>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import Sidebar from 'components/layoutComponents/Sidebar'
import ListCardItem from 'components/interface/ListCardItem'
import { navList } from 'container/dahuaApi/nav'
import interfaceApi from '@/api/interface'
// import interfaceData from './interfaceData'

export default {
  name: 'interface',
  components: {
    Sidebar,
    ListCardItem
  },
  data () {
    return {
      navList,
      // 新加借口列表
      newCardList: [],
      // 接口列表变量
      interfaceContent: {},
      // 获取当前点击导航得index
      currentNav: '',
      // 每行标签展示数量(需要能被24整除，如1、2、3、4、6。。。)
      colNum: 1,
      // 登录用户数据
      userInfo: {}
    }
  },
  methods: {
    getToken () {
      interfaceApi.getPublickey('8900yanshi', res => {
        interfaceApi.login({
          loginName: '8900yanshi',
          loginPass: '8900yanshi1',
          publicKey: res.publicKey
        }, res => {
          this.userInfo = res
          // console.log(this.userInfo)
        })
      })
    },
    // 获取点击的导航的数据
    getInterfaceContent (navId) {
      console.log(navId)
      interfaceApi.getInterfaceListByCategoryId('/Interface/listByCatalogID', navId, res => {
        this.currentNav = navId
        this.newCardList = []
        this.interfaceContent = res
      })
      // this.interfaceContent = interfaceData[navId]
    },
    // 测试
    test (event) {
      console.log(event)
    },
    // 获取初始数据
    getDefaultData () {
      interfaceApi.getInterfaceList('/Interface/list', res => {
        this.interfaceContent = res
      })
    },
    // 添加一个空白卡片
    addEmptyCard () {
      this.newCardList.push({
        id: 0,
        title: '',
        url: '',
        type: 'post',
        params: '{}',
        catalogID: this.currentNav,
        key: Date.now()
      })
    },
    // 删除一个空白卡片
    removeEmptyCard (item) {
      var index = this.newCardList.indexOf(item)
      if (index !== -1) {
        this.newCardList.splice(index, 1)
      }
      // console.log(item, index)
    }
  },
  created () {
    this.getToken()
    // this.getDefaultData()
  }
}
</script>

<style>
p {
  margin: 0;
}
.el-aside {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 200px;
  border-right: solid 1px #e6e6e6;
}

.el-main {
  background-color: #fafafa;
}

.el-row {
  margin-bottom: 20px;
}
</style>
