<template>
    <div v-if="filmArr.length">
      <!-- <van-list
      v-model="loading"
      @load="onLoad"
       :immediate-check="false"
       :finished="finished"
       ref="vantList"
       class="box"
       >
        <van-cell v-for="item in arr" :key="item.filmId"  @click="handleClick(item.filmId)">
          <div class="navbar">
            <header>
                <img :src="item.poster" alt="">
            </header>
            <section>
                <p>{{item.name}}</p>
                <p>观众评分 <span class="score">{{item.grade}}</span></p>
                <p>主演：{{item.actors | isactors}}</p>
                <p>{{item.nation}} | {{item.runtime}}分钟</p>
            </section>
            <footer>
                <span class="ticket">购票</span>
            </footer>
          </div>
        </van-cell>
      </van-list> -->

      <van-list
        v-model="loading"
        :finished="finished"
        :immediate-check="immediate"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <film-tabbar :arr="filmArr" />
      </van-list>
    </div>
</template>

<script>
import filmTabbar from '@/views/films/FilmTabbar.vue'
import axiosCapsulation from '@/util/axios-capsulation'
export default {
  // 注册组件
  components: {
    filmTabbar
  },
  data () {
    return {
      filmArr: [],
      total: 0,
      num: 1,
      loading: false,
      finished: false,
      immediate: false
    }
  },
  mounted () {
    axiosCapsulation({
      url: '/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=3654490',
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(item => {
      this.filmArr = item.data.data.films
      this.total = item.data.data.total
    })
  },
  methods: {
    onLoad () {
      // 数据是否已经加载到最大值
      if (this.filmArr.length === this.total && this.total !== 0) {
        this.finished = true
        return
      }

      axiosCapsulation({
        url: `/gateway?cityId=310100&pageNum=${++this.num}&pageSize=10&type=1&k=3654490`,
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(item => {
        this.filmArr = [...this.filmArr, ...item.data.data.films]
        this.loading = false
      })
    }
  }

}
</script>

<!-- <script>
import Vue from 'vue'
import axiosCapsulation from '@/util/axios-capsulation'

Vue.filter('isactors', res => {
  return res?.map(item => item.name).join(' ')
})

let num = 1

export default {
  mounted () {
    axiosCapsulation({
      url: '/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=3654490',
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(item => {
      this.arr = item.data.data.films
      this.total = item.data.data.total
    })
  },
  data () {
    return {
      arr: [],
      loading: false,
      finished: false,
      total: 0
    }
  },
  methods: {
    handleClick (filmID) {
      this.$router.push(`/filmsnavbar/${filmID}`)
    },
    onLoad () {
      console.log('到底了')
      if (this.arr.length === this.total && this.total !== 0) {
        this.finished = true
        return
      }

      axiosCapsulation({
        url: `/gateway?cityId=310100&pageNum=${++num}&pageSize=10&type=1&k=3654490`,
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(item => {
        this.arr = [...this.arr, ...item.data.data.films]
        this.loading = false
      })
    }
  }
}
</script> -->

<style lang="scss" scoped>
// *{
//     margin: 0;
//     padding: 0;
// }
// .navbar{
//     display: flex;
//     align-items: center;
//     justify-content: space-around;
// }
// img{
//     height: 5.8406rem;
//     margin: .5rem;
// }
// section p:nth-child(1){
//     font-size: 1rem;
//     margin-top: .625rem;
// }
// section p:nth-child(2),section p:nth-child(3),section p:nth-child(4){
//     font-size: .8125rem;
//     color: gray;
//     margin: .3125rem 0;
// }
// section p:nth-child(3){
//     overflow: hidden;
//     white-space: nowrap;
//     text-overflow: ellipsis;
//     width: 14rem;
// }
// .score{
//     color: #ffb232;
// }
// .ticket{
//     line-height: 1.5625rem;
//     height: 1.5625rem;
//     width: 3.125rem;
//     color: #ff5f16;
//     font-size: .8125rem;
//     text-align: center;
//     border-radius: .125rem;
//     border: .0625rem solid #ff5f16;
//     padding: .3125rem .625rem;
// }
</style>
