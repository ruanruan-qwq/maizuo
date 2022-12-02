<template>
  <!-- 影院顶部栏 -->
    <div>
      <van-nav-bar title="影院" ref="vantNavbar" @click-left="skip()" @click-right="search()">
        <template #left>
          {{cityName}}
          <van-icon name="arrow-down" color="gray"/>
        </template>

        <template #right>
          <van-icon name="search" size="18" color="gray"/>
        </template>
      </van-nav-bar>

      <div class="box" ref="wrapper" :style="{height:height}">
        <city-list :arr="cinemaList"></city-list>
      </div>
    </div>
</template>

<script>
// import axiosCapsulation from '@/util/axios-capsulation'
import BetterScroll from 'better-scroll'
import cityList from '@/views/cinemas/CityList.vue'
import { mapState, mapActions } from 'vuex'
export default {
  mounted () {
    // 设置 .box 高度
    this.height =
    document.documentElement.clientHeight - // 视口高度减去 组件高度 底部栏高度
    this.$refs.vantNavbar.$el.offsetHeight -
    document.querySelector('footer').offsetHeight + 'px'

    if (this.cinemaList.length === 0) {
      this.changeCinemaData().then(res => {
        new BetterScroll(this.$refs.wrapper, {
          scrollY: true,
          scrollbar: true
        })
      })
    } else {
      this.$nextTick(() => {
        new BetterScroll(this.$refs.wrapper, {
          scrollY: true,
          scrollbar: true
        })
      })
    }
  },
  data () {
    return {
      arr: [],
      height: '0px'
    }
  },
  methods: {
    ...mapActions([
      'changeCinemaData'
    ]),
    skip () {
      this.$router.push('/city')
    },
    search () {
      this.$router.push('/search')
    }
  },
  components: {
    cityList
  },
  computed: {
    ...mapState(['cityName', 'cinemaList'])
  }
}
</script>

<style lang="scss" scoped>

    .box{
            overflow: hidden;
            position: relative;
        }
</style>
