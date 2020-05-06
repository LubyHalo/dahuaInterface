<template>
  <el-main>
    <el-row>
      <el-button type="primary" icon="el-icon-plus" circle @click="addTask"></el-button>
    </el-row>
    <el-table
    :data="taskData"
    border
    style="width: 100%">
      <el-table-column
        fixed
        prop="createTime"
        label="任务创建时间"
        width="150">
      </el-table-column>
      <el-table-column
        prop="taskName"
        label="任务名称">
      </el-table-column>
      <el-table-column
        prop="createPerson"
        label="任务创建人">
      </el-table-column>
      <el-table-column
        prop="interfaceIDs"
        label="任务接口">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>接口1: 测试1</p>
            <p>接口2: 测试2</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.interfaceIDs }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        prop="taskStatus"
        label="任务执行状态"
        :filters="filters"
        :filter-method="filterTag"
        filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.taskStatus === 1 ? 'primary' : 'success'"
            disable-transitions>{{scope.row.taskStatus}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">接口详情</el-button>
          <el-button type="text" size="small">编辑</el-button>
          <el-button type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-main>
</template>

<script>
import taskApi from '@/api/task'

export default {
  data () {
    return {
      taskData: [],
      filters: [{
        text: '执行中',
        value: 1,
        type: 'primary'
      }, {
        text: '执行成功',
        value: 2,
        type: 'success'
      }, {
        text: '执行出错',
        value: 3,
        type: 'error'
      }]
    }
  },
  methods: {
    // 任务列表初始展示
    getTaskList () {
      taskApi.getTaskList('/Task/list', res => {
        console.log(res)
        this.taskData = res
      })
    },
    handleClick (row) {
      console.log(row)
    },
    filterTag (value, row) {
      return row.taskStatus === value
    },
    addTask () {
      console.log('Add a task!')
    }
  },
  created () {
    this.getTaskList()
  }
}
</script>
