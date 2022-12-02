<template>
    <div>
      <!-- 轮播图组件 -->
        <section>
            <div class="swiper" v-newswiper>

                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in arr" :key="item.filmId">
                        <img :src="item.poster" alt="">
                    </div>
                </div>

                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
            </div>
        </section>

    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
Vue.directive('newswiper', {
  inserted () {
    new Swiper('.swiper', {
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },

      // 自动切换
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }

    })
  }
})
export default {
  mounted () {
    axios.get('/test.json').then(item => { this.arr = item.data.data.films })
  },
  data () {
    return {
      arr: []
    }
  }
}
</script>

<style lang="scss" scoped>
section img{
    width: 100%;
    height: 13.75rem;
}
</style>
