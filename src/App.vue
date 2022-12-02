<template>
  <div>
    <router-view></router-view>

    <footer class="nav-bar" v-show="$store.state.isfooterNabbarShow">
      <router-link :to="item.location" custom v-slot="{ navigate,isActive }" v-for="item in locations" :key="item.name">
        <div :class=" isActive | isActivetrue " class="bottom-navbar">
          <span class="iconfont" :class="item.classname"></span>
          <span @click="navigate">{{item.name}}</span>
        </div>
      </router-link>
    </footer>

  </div>
</template>

<script>
import Vue from 'vue'
import '@/assets/font-icon/iconfont.css'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)
Vue.filter('isActivetrue', data => data ? 'cativemike' : '')
export default {
  components: {

  },
  data () {
    return {
      locations: [
        { location: '/filmsnavbar', classname: 'icon-dianying', name: '电影' },
        { location: '/cinemasnavbar', classname: 'icon-shipin', name: '影院' },
        { location: '/minenavbar', classname: 'icon-wode-wodefensi', name: '我的' }
      ]
    }
  },
  computed: {

  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
<style lang="scss" scoped>
:root,html{
  width: 100%;
  height: 100%;
}
.cativemike{
  color: #ff5f16;
}
.bottom-navbar{
  display: flex;
  flex-direction: column;
  .iconfont{
    font-size: 1.25rem;
  }
  .iconfont + span{
    font-size: .75rem;
  }
}
.nav-bar{
  position: fixed;
  bottom: 0;
  display: flex;
  height: 3.0625rem;
  text-align: center;
  width: 100%;
  justify-content: space-around;
  color: gray;
  align-items: center;
  background-color: white;
  z-index: 100;
}
</style>
