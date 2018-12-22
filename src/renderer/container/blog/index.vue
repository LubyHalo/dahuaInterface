<template>
  <div class="Blog">
    <h1>{{ msg }}</h1>
    <div v-for="(blog,index) in blogList" v-bind:key="index">
      <h3 >
        <a :href="`https://juejin.im/book/`+blog.id" >
          <span>{{blog.title}}</span>
        </a>
      </h3>
    </div>
  </div>
</template>

<script>
import juejin from '@/api/juejin'

export default {
  name: 'Blog',
  data () {
    return {
      msg: '掘金小册一览',
      blogList: []
    }
  },
  created () {
    this.getBlog()
  },
  methods: {
    getBlog () {
      // this.$http.get('/v1/getListByLastTime?src=web&pageNum=1').then(res => {
      //   this.blogList = res.data.d
      // })
      juejin.getBlog('1', res => {
        this.blogList = res.d
      })
    }
  }
}
</script>
