<template>
    <div>
        <van-list
            v-model="loading"
            :finished="finished"
            :immediate-check="immediate"
            finished-text="没有更多了"
            @load="onLoad"
        >
            <film-tabbar :arr="filmArr" :buyTicket="0" />
        </van-list>
    </div>
</template>

<script>
import filmTabbar from '@/views/films/FilmTabbar.vue'
import axiosCapsulation from '@/util/axios-capsulation'
export default {
  components: {
    filmTabbar
  },
  data () {
    return {
      filmArr: [],
      total: 0,
      loading: false,
      finished: false,
      immediate: false
    }
  },
  mounted () {
    axiosCapsulation({
      url: '/gateway?cityId=310100&pageNum=1&pageSize=10&type=2&k=3665768',
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
        url: `/gateway?cityId=310100&pageNum=${++this.num}&pageSize=10&type=2&k=3665768`,
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
