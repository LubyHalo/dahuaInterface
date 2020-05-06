<template>
  <el-card class="box-card interface-card">
    <div slot="header" class="clearfix">
      <span :class="`request-tag-`+requestValue.type" class="request-tag" v-show="!isAddMode && !isEditMode">{{requestValue.type.toUpperCase()}}</span>
      <span class="card-title" v-show="!isAddMode && !isEditMode">
        {{requestValue.title}}
      </span>
      <el-input placeholder="请输入接口名称" v-model="requestValue.title" class="interface-header-input" v-show="isAddMode || isEditMode">
        <el-select v-model="requestValue.type" slot="prepend" placeholder="请选择请求类型">
          <el-option label="GET" value="get"></el-option>
          <el-option label="POST" value="post"></el-option>
        </el-select>
        <!-- <el-button slot="append" icon="el-icon-search"></el-button> -->
      </el-input>
      <span class="request-btn" style="float: right;">
        <el-button size="mini" @click="testRequest(requestValue.url, requestValue.params, requestValue.type)" type="primary" plain :loading="isLoading">测试</el-button>
        <el-dropdown trigger="click" @command="handleCommand" v-show="!isAddMode">
          <span class="el-dropdown-link">
            操作<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="edit">编辑</el-dropdown-item>
            <el-dropdown-item command="delete">删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </span>
    </div>
    <el-input placeholder="请输入URL" v-model="requestValue.url" class="item" :disabled="!isAddMode && !isEditMode">
      <template slot="prepend">URL</template>
    </el-input>
    <div class="text item" v-show="isAddMode || isEditMode">
      <el-checkbox v-model="requestValue.hasExtraParams">额外参数(UserID)</el-checkbox>
      <el-checkbox v-model="isPassEncrypt">参数密码加密</el-checkbox>
      <el-input v-model="requestValue.passEncryptWord" placeholder="请输入需要加密的字段" :disabled="!isPassEncrypt"></el-input>
    </div>
    <div class="text item">
      <p class="item-param-header">Params
        <!-- <el-button style="float: right; padding: 3px 0" type="text">默认</el-button> -->
      </p>
      <!-- <pre class="item-param-content">{{ JSON.stringify(requestValue.params) === '{}' ?  '无参数' : requestValue.params }}</pre> -->
      <jsonEditor
        :value="interfaceParamFormat"
        @init="editorInit"
        @input="editorDataChange"
        lang="json" theme="github" width="100%" height="200">
      </jsonEditor>
    </div>
    <div class="text">
      <p class="item-param-header">Request Result
        <el-button style="float: right; padding: 3px 0" type="text" @click="clearRequestRes()">清空</el-button>
      </p>
      <pre class="item-param-content" v-loading="isLoading" element-loading-text="数据获取中">{{ JSON.stringify(requestRes) === '{}' ?  '' : requestRes }}</pre>
    </div>
    <div class="text text-right item-top" v-show="isEditMode">
      <span class="request-btn">
        <el-button size="small" type="primary" @click="saveEdit">保存</el-button>
        <el-button size="small" @click="cancelEdit">取消</el-button>
      </span>
    </div>
    <div class="text text-right item-top" v-show="isAddMode">
      <span class="request-btn">
        <el-button size="small" type="primary" @click="saveAdd">添加</el-button>
        <!-- $emit('removeCard', cardData.key) -->
        <el-button size="small" @click="$emit('removeCard', cardData)">取消</el-button>
      </span>
    </div>
    <!-- <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4}"
      placeholder="请输入内容"
      :value="JSON.stringify(requestValue.params)">
    </el-input> -->
  </el-card>
</template>

<script>
import interfaceApi from '@/api/interface'
// 引入ace-editor
import jsonEditor from 'vue2-ace-editor'
import 'brace/ext/language_tools'

export default {
  name: 'ListCardItem',
  props: ['cardData', 'isNewCard'],
  components: {
    jsonEditor
  },
  data () {
    return {
      // 请求结果
      requestRes: {},
      // 请求类型选择
      requestValue: {
        id: this.cardData.id,
        type: this.cardData.type,
        title: this.cardData.title,
        url: this.cardData.url,
        params: JSON.parse(this.cardData.params),
        catalogID: this.cardData.catalogID,
        hasExtraParams: this.cardData.paramsTag,
        passEncryptWord: this.cardData.encryptTag
      },
      isPassEncrypt: this.cardData.encryptTag !== '',
      // 按钮载入中样式控制
      isLoading: false,
      editData: '',
      // 编辑模式标记
      isEditMode: false,
      // 新增模式标记
      isAddMode: this.isNewCard !== undefined ? this.isNewCard : false
    }
  },
  computed: {
    interfaceParamFormat () {
      return JSON.stringify(this.requestValue.params, null, 1)
    }
  },
  methods: {
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
      this.requestValue.params = JSON.parse(context)
    },
    // 发起测试请求
    testRequest (url, param, type) {
      this.isLoading = true
      // console.log(this.editData)
      // console.log(param)
      param = (JSON.stringify(this.requestValue.params) === '{}' ? param : this.requestValue.params)
      // if (this.isPassEncrypt) {
      //   // param[this.passEncryptWord]
      //   console.log(param)
      //   console.log(param[this.requestValue.passEncryptWord])
      // }
      // console.log(param)
      if (type === 'get') {
        interfaceApi.interfaceRequestGet('/CardSolution' + url, param, res => {
          this.isLoading = false
          this.requestRes = res
        }, this.requestValue.hasExtraParams)
      } else {
        interfaceApi.interfaceRequestPost('/CardSolution' + url, param, res => {
          this.isLoading = false
          this.requestRes = res
        }, this.requestValue.hasExtraParams)
      }
    },
    // 清空请求数据
    clearRequestRes () {
      this.requestRes = {}
      // this.requestValue.params = {}
    },
    // 下拉按钮（编辑、删除）点击
    handleCommand (command) {
      switch (command) {
        case 'edit':
          interfaceApi.interfaceRequestGet('/CardSolution/rsa/getPubKey', res => {
            console.log(res)
          })
          this.isEditMode = true
          break
        case 'delete':
          this.$confirm('确认删除 ' + this.requestValue.title + ' 接口?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            interfaceApi.deleteInterface('/Interface/Delete?id=' + this.requestValue.id, res => {
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
              this.$emit('refreshData')
            })
          }).catch(() => {})
          break
        default:
          break
      }
    },
    // 编辑模式下保存按钮事件
    saveEdit () {
      interfaceApi.updateInterface('/Interface/Update', {
        id: this.requestValue.id,
        // id: 0,
        title: this.requestValue.title,
        url: this.requestValue.url,
        type: this.requestValue.type,
        params: JSON.stringify(this.requestValue.params),
        catalogID: this.requestValue.catalogID,
        ParamsTag: this.requestValue.hasExtraParams,
        EncryptTag: this.isPassEncrypt ? this.requestValue.passEncryptWord : ''
      }, res => {
        this.isEditMode = false
        this.$message({
          type: 'success',
          message: '保存成功!'
        })
        this.$emit('refreshData')
      })
    },
    // 编辑模式下取消按钮事件
    cancelEdit () {
      this.isEditMode = false
      this.requestValue.type = this.cardData.type
      this.requestValue.title = this.cardData.title
      this.requestValue.url = this.cardData.url
      this.requestValue.params = JSON.parse(this.cardData.params)
      this.requestValue.hasExtraParams = this.cardData.paramsTag
      this.requestValue.passEncryptWord = this.cardData.encryptTag
    },
    // 添加模式下保存按钮事件
    saveAdd () {
      interfaceApi.addInterface('/Interface/Insert', [{
        title: this.requestValue.title,
        url: this.requestValue.url,
        type: this.requestValue.type,
        params: JSON.stringify(this.requestValue.params),
        catalogID: this.requestValue.catalogID,
        ParamsTag: this.requestValue.hasExtraParams,
        EncryptTag: this.isPassEncrypt ? this.requestValue.passEncryptWord : ''
      }], res => {
        this.isAddMode = false
        this.$message({
          type: 'success',
          message: '保存成功!'
        })
        this.$emit('refreshData')
      })
    },
    // 取消添加
    cancelAdd () {
      console.log(this.cardData.key)
    },
    // 测试
    test (content) {
      console.log(content)
    }
  }
}
</script>

<style>
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
  min-height: 3em;
  border: 1px solid #dcdfe6;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  font-size: 12px;
  font-family: inherit;
}
.interface-header-input {
  width: 70%;
}
.el-select .el-input {
  width: 100px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.interface-card .el-input.is-disabled .el-input__inner {
  background-color: #fff;
  border-color: #dcdfe6;
  color: #606266;
  cursor: default;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 10px;
}

.item-top {
  margin-top: 10px;
}

.text-right {
  text-align: right;
}

.ace_editor {
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
}
</style>
