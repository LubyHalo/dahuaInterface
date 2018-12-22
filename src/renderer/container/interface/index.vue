<template>
  <el-container>
    <el-aside width="201px">
      <el-scrollbar style="height: 100%">
        <Sidebar :navList='navList' @navClick="getinterfaceContent"></Sidebar>
      </el-scrollbar>
    </el-aside>
    <el-main>
      <pre>
        <textarea name="" id="" cols="30" rows="10" v-model="userInfo"></textarea>
      </pre>
      <!-- <p v-for="n in (Math.ceil(interfaceContent.length/2) || 0)" :key="n">{{n}}</p> -->
      <el-row :gutter="10" v-for="n in (Math.ceil(interfaceContent.length/2) || 0)" :key="n">
        <el-col
        :span="24/colNum"
        v-for="(interfaceItem, index) in interfaceContent"
        :key="index"
        v-if="index >= (n-1) * colNum && index < n * colNum">
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span>{{interfaceItem.title}}</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="getToken()">操作按钮</el-button>
            </div>
            <div class="text item">
              {{'URL: ' + interfaceItem.url }}
            </div>
            <code></code>
            <!-- <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div> -->
          </el-card>
        </el-col>
      </el-row>
      <!-- <el-footer height="30">copyright by xxb</el-footer> -->
    </el-main>
  </el-container>
</template>

<script>
import Sidebar from 'components/layoutComponents/Sidebar'
import { navList } from 'container/dahuaApi/nav'
import interfaceApi from '@/api/interface'
import interfaceData from './interfaceData'

export default {
  name: 'interface',
  components: {
    Sidebar
  },
  data () {
    return {
      navList,
      userInfo: {},
      // 接口列表变量
      interfaceContent: {},
      // 每行标签展示数量(需要能被24整除，如1、2、3、4、6。。。)
      colNum: 2
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
          console.log(this.userInfo)
        })
      })
    },
    // 获取点击的导航的数据
    getinterfaceContent (navIndex) {
      this.interfaceContent = interfaceData[navIndex]
    }
  }
}
</script>

<style>
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

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  /* width: 480px; */
}
</style>
