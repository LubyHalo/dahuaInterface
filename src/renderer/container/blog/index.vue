<template>
  <div class="Blog">
    <h1>{{ msg }}</h1>
    <!-- <div v-for="(blog,index) in blogList" v-bind:key="index">
      <h3 >
        <a :href="`https://juejin.im/book/`+blog.id" >
          <span>{{blog.title}}</span>
        </a>
      </h3>
    </div> -->
    <el-button type="primary" @click="getHtml(url)">
      ceshi
    </el-button>
    <div class="wrapper">
      <header>header</header>
        <section>
        弹性滚动区域
        </section>
      <footer>footer</footer>
    </div>
  </div>
</template>

<script>
import juejin from '@/api/juejin'
// import cheerio from 'cheerio'
// import axios from 'axios'

export default {
  name: 'Blog',
  data () {
    return {
      msg: '掘金小册一览',
      blogList: [],
      url: '/index.html'
    }
  },
  created () {
    this.getBlog()
    // this.filterChapters(this.url)
  },
  methods: {
    getBlog () {
      // this.$http.get('/v1/getListByLastTime?src=web&pageNum=1').then(res => {
      //   this.blogList = res.data.d
      // })
      juejin.getBlog('1', res => {
        this.blogList = res.d
      })
    },
    filterChapters (html) {
      // var $ = cheerio.load(html)//加载html
      // //获取所有章数
      // var chapters = $('.provincetr')
      // var courseData = []//课程数组
      // console.log(chapters.length)
      // //遍历
      // chapters.each(function(item){
      //   var chapter      = $(this)
      //   var chapterTitle = chapter.find('.provincetr').text()
      //   // var videos       = chapter.find('.video').children('li')
      //   var chapterData  = {
      //     chapterTitle:chapterTitle,
      //     videos:[]
      //   }
      //   // videos.each(function(item){
      //   //   var video      = $(this).find('.J-media-item')
      //   //   var videoTitle = video.text()
      //   //   var id         = video.attr('href').split('video/')[1]

      //   //     chapterData.videos.push({
      //   //     title:videoTitle,
      //   //     id:id
      //   //     })
      //   // })
      //   courseData.push(chapterData)

      // })

      // return  courseData
    },
    getHtml (url) {
      // axios.get('/gov' + url).then(res => {
      //   console.log(res)
      // })
    }
  }
}
</script>
