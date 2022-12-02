<template>
    <div>
        <!-- 轮播图 -->
        <header>
            <swiper-films></swiper-films>
        </header>

        <!-- 正在热映 & 即将上映 -->
        <section class="sticky">
            <router-link :to="item.location" custom v-slot="{ navigate,isActive }" v-for="item in arr" :key="item.name">
                <span @click="navigate" :class=" isActive | isActivetrue ">{{item.name}}</span>
            </router-link>
        </section>

        <!-- 电影数据 -->
        <footer>
            <router-view></router-view>
        </footer>
    </div>
</template>

<script>
import swiperFilms from '@/views/films/SwiperFilms'
export default {
  components: {
    swiperFilms
  },
  data () {
    return {
      arr: [
        { location: '/filmsnavbar/nowplaying', name: '正在热映' },
        { location: '/filmsnavbar/comingsoon', name: '即将上映' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
section{
    display: flex;
    justify-content: space-around;
    height: 3.0625rem;
    align-items: center;
    font-size: .875rem;
    border-bottom: 1px solid rgba(119, 119, 119, 0.05);
}
.cativemike{
  color: #ff5f16;
  border-bottom: 2px solid #ff5f16;
  padding: 1.0313rem 0;
}
footer{
  margin-bottom: 3.0625rem;
}
.sticky{
  position: sticky;
  top: 0;
  background-color: white;
}
</style>
