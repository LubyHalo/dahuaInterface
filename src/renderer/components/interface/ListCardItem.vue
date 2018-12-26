<template>
  <el-card class="box-card" shadow="hover">
    <div slot="header" class="clearfix">
      <span :class="`request-tag-`+cardData.type" class="request-tag">{{cardData.type.toUpperCase()}}</span>
      <span class="card-title">
        {{cardData.title}}
      </span>
      <span class="request-btn" style="float: right;">
        <el-button size="mini" @click="testRequest(cardData.url, cardData.params, cardData.type)" type="primary" plain :loading="isLoading">测试</el-button>
      </span>
    </div>
    <el-input placeholder="请输入URL" v-model="cardData.url" class="item">
      <template slot="prepend">URL</template>
    </el-input>
    <div class="text item">
      <p class="item-param-header">Params
        <!-- <el-button style="float: right; padding: 3px 0" type="text">默认</el-button> -->
      </p>
      <pre class="item-param-content">{{ JSON.stringify(cardData.params) === '{}' ?  '无参数' : cardData.params }}</pre>
      <!-- <jsonEditor
        :value="JSON.stringify(cardData.params, null, 1)"
        @init="editorInit"
        @input="editorDataChange"
        lang="json" theme="github" width="100%" height="200">
      </jsonEditor> -->
    </div>
    <div class="text">
      <p class="item-param-header">Request Result
        <el-button style="float: right; padding: 3px 0" type="text" @click="clearRequestRes()">清空</el-button>
      </p>
      <pre class="item-param-content">{{ JSON.stringify(requestRes) === '{}' ?  '' : requestRes }}</pre>
    </div>
    <!-- <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4}"
      placeholder="请输入内容"
      :value="JSON.stringify(cardData.params)">
    </el-input> -->
  </el-card>
</template>

<script>
import interfaceApi from '@/api/interface'

export default {
  name: 'ListCardItem',
  props: ['cardData'],
  data () {
    return {
      // 请求结果
      requestRes: {},
      // 按钮载入中样式控制
      isLoading: false,
      editData: ''
    }
  },
  methods: {
    // 发起测试请求
    testRequest (url, param, type) {
      console.log(this.editData)
      console.log(param)
      param = (this.editData === '' ? param : JSON.parse(this.editData))
      console.log(param)
      if (type === 'get') {
        interfaceApi.interfaceRequestGet('/CardSolution' + url, param, res => {
          // this.currentItem = index
          this.requestRes = res
        })
      } else {
        interfaceApi.interfaceRequestPost('/CardSolution' + url, param, res => {
          // this.currentItem = index
          this.requestRes = res
        })
      }
    }
  }
}
</script>

<style scoped>
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
