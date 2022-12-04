<template>
  <!-- 选择城市 -->
    <div class="dad" v-if="arr.length">

      <div class="sticky">
        <!-- 当前城市 -->
          <div class="topbar-city">
            <van-icon name="cross" class="close" @click="handelBack()" />
            当前城市 - {{this.$store.state.cityName}}
          </div>

        <!-- 城市搜索 -->
          <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
            class="search"
          />
      </div>
        <city-list v-if="value" :arr="computedCityArr"></city-list>

        <!-- IndexBar 索引栏 -->
        <van-index-bar :index-list="arr | filterList" @select="handelSelect" v-if="!value">
          <div v-for="data in arr" :key="data.type">
            <van-index-anchor :index="data.type" />
            <van-cell :title="item.name" v-for="item in data.list" :key="item.cityId" @click="handeljump(item.cityId,item.name)" />
          </div>
        </van-index-bar>
    </div>
</template>

<script>
import Vue from 'vue'
import { Toast } from 'vant'
import axiosCapsulation from '@/util/axios-capsulation'
import footerNabbarShow from '@/util/mixin'
import cityList from '@/views/cinemas/CityList.vue'

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
      arr: [],
      cityArr: [],
      value: ''
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
    },
    onSearch () {

    },
    onCancel () {

    },
    handelBack () {
      this.$router.back()
    }
  },
  components: {
    cityList
  },
  computed: {
    computedCityArr () {
      if (this.arr.length) {
        let arr = []
        // eslint-disable-next-line no-return-assign
        this.arr.forEach(res => arr = arr.concat(res.list))

        return arr.filter(item => item.pinyin.toUpperCase().includes(this.value.toUpperCase()) ||
                           item.name.toUpperCase().includes(this.value.toUpperCase())
        )
      }
      return []
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
.topbar-city{
  height: 2.75rem;
  line-height: 2.75rem;
  font-size: 1.0625rem;
  text-align: center;
}
.close{
  position: absolute;
  left: .75rem;
  top: .75rem;
  font-size: 1.25rem;
}
.sticky{
  position: sticky;
  top: 0;
  z-index: 200;
  background-color: white;
}
</style>
