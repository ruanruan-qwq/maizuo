<template>
  <!-- 选择城市 -->
    <div class="dad" v-if="arr.length">
        <van-index-bar :index-list="arr | filterList" @select="handelSelect">
          <div v-for="data in arr" :key="data.type">
            <van-index-anchor :index="data.type" />
            <van-cell :title="item.name" v-for="item in data.list" :key="item.cityId" @click="handeljump(item.cityId,item.name)" />
          </div>
        </van-index-bar>
    </div>
</template>

<script>
import axiosCapsulation from '@/util/axios-capsulation'
import Vue from 'vue'
import footerNabbarShow from '@/util/mixin'
import { Toast } from 'vant'
Vue.filter('filterList', item => item.map(data => data.type))
export default {
  mixins: [footerNabbarShow],
  mounted () {
    axiosCapsulation({
      url: '/gateway?k=5996381',
      headers: {
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
      this.arr = this.filtration(res.data.data.cities)
      // console.log(this.arr)
    })
  },
  data () {
    return {
      arr: []
    }
  },
  methods: {
    filtration (list) {
      const citylist = []
      const alphabet = []
      for (let i = 65; i < 91; i++) {
        alphabet.push(String.fromCharCode(i))
      }

      alphabet.forEach(letter => {
        const newlist = list.filter(item => item.pinyin.substring(0, 1).toUpperCase() === letter)

        newlist.length > 0 && citylist.push({
          type: letter,
          list: newlist
        })
      })
      return citylist
    },
    handelSelect (data) {
      Toast(data)
    },
    handeljump (cityId, cityName) {
      this.$store.commit('changeCityName', cityName)
      this.$store.commit('changeCityId', cityId)
      this.$store.dispatch('changeCinemaData', cityId)
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.dad{
    margin-bottom: 3.0625rem;
}
</style>

<style>
.van-toast--html, .van-toast--text{
  min-width: 1.875rem;
}
</style>
