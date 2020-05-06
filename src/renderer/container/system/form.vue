<template>
  <div class="form-view">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{formTitle}}</span>
        <el-button style="float: right; padding: 3px 0" type="text" icon="el-icon-arrow-left" @click="backToMain">返回</el-button>
      </div>
      <el-form :model="userForm" :rules="rules" ref="userForm" label-width="100px" class="demo-userForm">
        <el-form-item label="ID" prop="id" v-if="isDetail">
          <span class="detail-span">{{detailForm.id}}</span>
        </el-form-item>
        <el-form-item label="用户账号" prop="username">
          <el-input v-model="userForm.username" v-if="!isDetail"></el-input>
          <span class="detail-span" v-if="isDetail">{{detailForm.username}}</span>
        </el-form-item>
        <el-form-item label="用户姓名" prop="realName">
          <el-input v-model="userForm.realName" v-if="!isDetail"></el-input>
          <span class="detail-span" v-if="isDetail">{{detailForm.realName}}</span>
        </el-form-item>
        <el-form-item label="用户工号" prop="userNum">
          <el-input v-model="userForm.userNum" v-if="!isDetail"></el-input>
          <span class="detail-span" v-if="isDetail">{{detailForm.userNum}}</span>
        </el-form-item>
        <el-form-item label="电话号码" prop="mobile">
          <el-input v-model="userForm.mobile" v-if="!isDetail"></el-input>
          <span class="detail-span" v-if="isDetail">{{detailForm.mobile}}</span>
        </el-form-item>
        <el-form-item label="邮箱地址" prop="email">
          <el-input v-model="userForm.email" v-if="!isDetail"></el-input>
          <span class="detail-span" v-if="isDetail">{{detailForm.email}}</span>
        </el-form-item>
        <el-form-item label="创建时间" prop="createTime" v-if="isDetail">
          <!-- <el-date-picker
            v-model="userForm.createTime"
            type="datetime"
            placeholder="请选择日期时间"
            v-if="!isDetail">
          </el-date-picker> -->
          <span class="detail-span">{{detailForm.createTime}}</span>
        </el-form-item>
        <el-form-item label="最后登录时间" prop="lastLoginTime" v-if="isDetail">
          <span class="detail-span">{{detailForm.lastLoginTime}}</span>
        </el-form-item>
        <el-form-item label="登录次数" prop="loginCount" v-if="isDetail">
          <span class="detail-span">{{detailForm.loginCount}}</span>
        </el-form-item>
        <el-form-item label="账号状态" prop="status">
          <!-- <el-input v-model="userForm.status" v-if="!isDetail"></el-input> -->
          <el-select v-model="userForm.status" placeholder="请设定帐号状态" v-if="!isDetail">
            <el-option
              v-for="item in statusOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <span class="detail-span" v-if="isDetail">{{detailForm.status}}</span>
        </el-form-item>
        <el-form-item v-if="!isDetail" class="form-item-button">
          <el-button @click="resetForm('userForm')">重置</el-button>
          <el-button type="primary" @click="submitForm('userForm')">确认提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import userApi from 'api/user'

export default {
  data () {
    return {
      userForm: {
        id: 0,
        username: '',
        realName: '',
        userNum: '',
        mobile: '',
        email: '',
        createTime: '',
        lastLoginTime: '',
        loginCount: 0,
        status: 1
      },
      rules: {
        username: [
          { required: true, message: '请输入用户账号', trigger: 'blur' },
          { min: 3, message: '长度至少 3 个字符', trigger: 'blur' }
        ],
        realName: [
          { required: true, message: '请输入用户姓名', trigger: 'blur' }
        ],
        userNum: [
          { required: true, message: '请输入用户工号', trigger: 'blur' }
        ],
        createTime: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        test: [
          { required: true, message: '请输入测试', trigger: 'blur' }
        ]
      },
      // 账号初始项
      statusOptions: [{
        value: -1,
        label: '已删除'
      }, {
        value: 1,
        label: '正常'
      }, {
        value: 2,
        label: '锁定'
      }]
    }
  },
  computed: {
    formTitle () {
      let title = ''
      switch (this.$route.meta.type) {
        case 'add':
          title = '添加用户'
          break
        case 'detail':
          title = '查看用户详情'
          break
        case 'edit':
          title = '编辑用户'
          break
        default:
          break
      }
      return title
    },
    detailForm () {
      return this.userForm
    },
    isDetail () {
      return this.$route.meta.type === 'detail'
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.$route.meta.type === 'add') {
            userApi.addUser(this.userForm, res => {
              console.log(res)
              if (res.status === 'success') {
                this.$message({
                  message: res.message,
                  type: 'success'
                })
              } else {
                this.$message.error(res.message)
              }
            })
          } else if (this.$route.meta.type === 'edit') {
            userApi.updateUser(this.userForm, res => {
              console.log(res)
              if (res.status === 'success') {
                this.$message({
                  message: res.message,
                  type: 'success'
                })
              } else {
                this.$message.error(res.message)
              }
            })
          }
        } else {
          console.log('失败，请检查字段!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    backToMain () {
      if (!this.isDetail) {
        this.$confirm('是否退出编辑（请注意，内容不会保存）?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.go(-1)
        })
      } else {
        this.$router.go(-1)
      }
    }
  },
  created () {
    if (this.$route.params.rowData !== null) {
      this.userForm = this.$route.params.rowData
    }
    console.log(this.$route.params.rowData)
    console.log(this.$route.meta.type)
  }
}
</script>

<style scoped>
.form-view {
  padding-top: 20px;
}
.detail-span {
  display: block;
  min-height: 40px;
  padding: 0 15px;
  border: dashed 1px #ccc;
}
.form-item-button {
  text-align: right;
}
</style>
