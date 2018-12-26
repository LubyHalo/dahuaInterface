<template>
  <el-container>
    <el-aside width="201px">
      <el-scrollbar style="height: 100%">
        <Sidebar :navList='navList' @navClick="getinterfaceContent"></Sidebar>
      </el-scrollbar>
    </el-aside>
    <el-main>
      <!-- <pre style="overflow: hidden;">
        {{userInfo}}
      </pre> -->
      <!-- <p v-for="n in (Math.ceil(interfaceContent.length/2) || 0)" :key="n">{{n}}</p> -->
      <el-row v-for="(item, index) in cardData" :key="index">
        <el-col :span="24">
          <ListCardItem :cardData='item'></ListCardItem>
        </el-col>
      </el-row>
      <el-row :gutter="10" v-for="n in (Math.ceil(interfaceContent.length/colNum) || 0)" :key="n">
        <el-col
        :span="24/colNum"
        v-for="(interfaceItem, index) in interfaceContent"
        :key="index"
        v-if="index >= (n-1) * colNum && index < n * colNum">
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <span :class="`request-tag-`+interfaceItem.type" class="request-tag">{{interfaceItem.type.toUpperCase()}}</span>
              <span class="card-title">
                {{interfaceItem.title}}
              </span>
              <span class="request-btn" style="float: right;">
                <el-button size="mini" @click="testRequest(interfaceItem.url, interfaceItem.params, interfaceItem.type, index)" type="primary" plain :loading="isLoading">测试</el-button>
              </span>
            </div>
            <el-input placeholder="请输入URL" v-model="interfaceItem.url" class="item">
              <template slot="prepend">URL</template>
            </el-input>
            <div class="text item">
              <p class="item-param-header">Params
                <!-- <el-button style="float: right; padding: 3px 0" type="text">默认</el-button> -->
              </p>
              <!-- <pre class="item-param-content">{{ JSON.stringify(interfaceItem.params) === '{}' ?  '无参数' : interfaceItem.params }}</pre> -->
              <jsonEditor
                :value="JSON.stringify(interfaceItem.params, null, 1)"
                @init="editorInit"
                @input="editorDataChange"
                lang="json" theme="github" width="100%" height="200">
              </jsonEditor>
            </div>
            <div class="text">
              <p class="item-param-header">Request Result
                <el-button style="float: right; padding: 3px 0" type="text" @click="clearRequestRes()">清空</el-button>
              </p>
              <pre class="item-param-content">{{ currentItem === index ? (JSON.stringify(requestRes) === '{}' ?  '' : requestRes) : '' }}</pre>
            </div>
            <!-- <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4}"
              placeholder="请输入内容"
              :value="JSON.stringify(interfaceItem.params)">
            </el-input> -->
          </el-card>
        </el-col>
      </el-row>
      <!-- <el-footer height="30">copyright by xxb</el-footer> -->
    </el-main>
  </el-container>
</template>

<script>
import Sidebar from 'components/layoutComponents/Sidebar'
import ListCardItem from 'components/interface/ListCardItem'
import { navList } from 'container/dahuaApi/nav'
import interfaceApi from '@/api/interface'
import interfaceData from './interfaceData'
// 引入ace-editor
import jsonEditor from 'vue2-ace-editor'
import 'brace/ext/language_tools'

export default {
  name: 'interface',
  components: {
    Sidebar,
    ListCardItem,
    jsonEditor
  },
  data () {
    return {
      navList,
      // 接口列表变量
      interfaceContent: {},
      // 每行标签展示数量(需要能被24整除，如1、2、3、4、6。。。)
      colNum: 1,
      // 登录用户数据
      userInfo: {},
      // 请求结果
      requestRes: {},
      // requestResStr: '',
      currentItem: null,
      // 按钮载入中样式控制
      isLoading: false,
      editData: '',
      // 测试用数据
      cardData: [{
        title: '查询访客预约信息',
        url: '/card/visitor/getVisitorData',
        type: 'post',
        params: {
          pageNum: 1,
          pageSize: 20
        }
      }, {
        title: '统计在访人数',
        url: '/card/visitor/countVisiting',
        type: 'post',
        params: {
          pageNum: 1,
          pageSize: 20
        }
      }]
    }
  },
  watch: {
    interfaceContent (newData, oldData) {
      this.requestRes = {}
      this.editData = ''
      console.log('watch-editData:', this.editData)
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
    getinterfaceContent (navIndex) {
      this.interfaceContent = interfaceData[navIndex]
    },
    // 发起测试请求
    testRequest (url, param, type, index) {
      console.log(this.editData)
      console.log(param)
      param = (this.editData === '' ? param : JSON.parse(this.editData))
      console.log(param)
      if (type === 'get') {
        interfaceApi.interfaceRequestGet(interfaceData.baseUrl + url, param, res => {
          this.currentItem = index
          this.requestRes = res
        })
      } else {
        interfaceApi.interfaceRequestPost(interfaceData.baseUrl + url, param, res => {
          this.currentItem = index
          this.requestRes = res
        })
      }
    },
    // 清空请求数据
    clearRequestRes () {
      this.requestRes = {}
      this.editData = ''
    },
    // 重置请求参数
    // setDefaultParams () {
    //   this.editData = ''
    // },
    // 测试
    test (event) {
      console.log(event)
    },
    // 初始化参数编辑器
    editorInit (editor) {
      require('brace/mode/json')
      require('brace/theme/chrome')
      require('brace/theme/github')
      require('brace/snippets/javascript')
      editor.setAutoScrollEditorIntoView(true)
      editor.setOptions({
        minLines: 5,
        maxLines: 30
      })
    },
    // 参数编辑器改变监听
    editorDataChange (context) {
      this.editData = context
      console.log('change-editData:', this.editData)
    }
  },
  created () {
    this.getToken()
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

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 10px;
}

.el-input-group__prepend {
  color: #444444;
  font-weight: bold;
}

.item-param-header{
  padding: 0 20px;
  background-color: #f5f7fa;
  color: #444444;
  font-weight: bold;
  border: 1px solid #dcdfe6;
  border-bottom: 0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 0 20px;
  line-height: 40px;
}
.item-param-content {
  max-height: 500px;
  overflow: auto;
  margin: 0;
  padding: 10px;
  min-height: 1em;
  border: 1px solid #dcdfe6;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  font-size: 12px;
  font-family: inherit;
}

.ace_editor {
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
}
</style>
