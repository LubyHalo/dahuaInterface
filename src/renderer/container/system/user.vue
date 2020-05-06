<template>
  <article>
    <div v-show="formVisible">
      <!-- <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item>
          <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="搜索项">
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search">搜索</el-button>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="onSubmit">查询</el-button>
          <el-button type="primary" @click="handleAdd">添加</el-button>
        </el-form-item>
      </el-form> -->
      <el-row class="search-bar">
        <el-col :span="16">
          <el-button type="primary" @click="handleAdd" icon="el-icon-plus">添加</el-button>
        </el-col>
        <el-col :span="8" class="search-bar-search">
          <el-input placeholder="请输入内容" v-model="searchText" class="input-with-select">
            <el-select v-model="searchKey" slot="prepend" placeholder="搜索项">
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search">搜索</el-button>
          </el-input>
        </el-col>
      </el-row>
    </div>
    <el-table
    :data="tableData"
    border
    style="width: 100%"
    v-show="formVisible">
      <el-table-column
        fixed
        prop="username"
        label="登录账号">
      </el-table-column>
      <el-table-column
        prop="realName"
        label="员工姓名">
      </el-table-column>
      <el-table-column
        prop="userNum"
        label="员工编号">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="创建时间"
        sortable>
      </el-table-column>
      <el-table-column
        prop="status"
        label="帐号状态"
        :filters="[{ text: '已删除', value: -1 }, { text: '正常', value: 1 }, { text: '锁定', value: 2 }]"
        :filter-method="filterTag"
        filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag
            :type="statusName(scope.row.status).tagType"
            disable-transitions>{{statusName(scope.row.status).text}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="150">
        <template slot-scope="scope">
          <el-button @click="handleDetail(scope.row)" type="text" size="small">查看</el-button>
          <el-button @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </article>
</template>

<script>
import userApi from '@/api/user'

export default {
  data () {
    return {
      /**
        "id": 用户ID,
        "username": 用户账号,
        "password": 用户密码,
        "realName": 用户姓名,
        "userNum": 员工编号,
        "mobile": 电话号码,
        "email": 邮箱地址,
        "createTime": 创建时间,
        "lastLoginTime": 最后登录时间,
        "loginCount": 登陆次数,
        "status": 帐号状态
      */
      tableData: [],
      formInline: {
        user: '',
        region: ''
      },
      formVisible: true,
      searchType: '',
      searchText: ''
    }
  },
  methods: {
    getUserList () {
      userApi.getUserList(res => {
        console.log(res)
        this.tableData = res
      })
    },
    handleAdd () {
      this.formVisible = false
      // this.$router.push('/system/user/add')
      this.$router.push({name: 'userAdd', params: { rowData: null }})
    },
    handleDetail (row) {
      this.formVisible = false
      // this.$router.push('/system/user/detail')
      this.$router.push({name: 'userDetail', params: { rowData: row }})
    },
    handleEdit (row) {
      this.formVisible = false
      this.$router.push({name: 'userEdit', params: { rowData: row }})
    },
    handleDelete (row) {
      this.$confirm('是否删除用户姓名为 ' + row.username + ' 的账号?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        userApi.deleteUser(row.id, res => {
          this.getUserList()
          if (res.status === 'success') {
            this.$message({
              message: res.message,
              type: 'success'
            })
          } else {
            this.$message.error(res.message)
          }
        })
      })
      // .catch(() => {
      //   this.$message({
      //     type: 'info',
      //     message: '已取消删除'
      //   })
      // })
    },
    onSubmit () {
      console.log('submit!')
    },
    statusName (statusValue) {
      let statusTag = {
        tagType: '',
        text: ''
      }
      switch (statusValue) {
        case -1:
          statusTag.tagType = 'danger'
          statusTag.text = '已删除'
          break
        case 1:
          statusTag.tagType = 'success'
          statusTag.text = '正常'
          break
        case 2:
          statusTag.tagType = 'warning'
          statusTag.text = '锁定'
          break
        default:
          statusTag.tagType = 'info'
          statusTag.text = '未选择'
          break
      }
      return statusTag
    },
    filterTag (value, row) {
      return row.status === value
    }
  },
  created () {
    this.getUserList()
  },
  // 导航守卫，控制表格显示或隐藏
  beforeRouteUpdate (to, from, next) {
    if (to.name === 'User') {
      this.getUserList()
      this.formVisible = true
    } else {
      this.formVisible = false
    }
    next()
  }
}
</script>

<style scoped>
.search-bar {
  margin-bottom: 10px;
}
.search-bar-search {
  text-align: right;
}
</style>
