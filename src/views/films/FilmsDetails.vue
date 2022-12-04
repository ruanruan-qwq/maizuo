<template>
  <!-- 电影详情 -->
    <div v-if="arr" class="root-div">
      <header>
        <top-bar v-fixed="50">
          {{arr.name}}
        </top-bar>
        <!-- 背景图 -->
        <div :style="{backgroundImage:'url('+arr.poster+')'}" class="poster">
          <van-icon name="arrow-left" class="vant-icon" @click="handelBack()"/>
        </div>

        <section>
          <div class="introduce">
            <p class="titel">
              {{arr.name}}
              <span>{{arr.item.name}}</span>
            </p>
            <p>{{arr.category}}</p>
            <p>{{arr.premiereAt | showFilter}} 上映</p>
            <P>{{arr.nation}}|{{arr.runtime}}分钟</P>
          </div>

          <div class="score">
            {{arr.grade}}
            <span>分</span>
          </div>
        </section>

        <footer :class="hidden?'hidden':''" class="introduce">
          {{arr.synopsis}}
        </footer>
        <div class="div-iconfont">
          <span class="iconfont" :class="hidden?'icon-jiantouxia':'icon-jiantoushang'" @click="hidden=!hidden"></span>
        </div>
      </header>

      <div class="bgcolor"></div>

      <section>
        <!-- 演职人员 -->
        <header class="actor">
          <div class="actor-people">演职人员</div>
          <swiper-component name="actor" :page="3.5">
            <swiper-component-list v-for="item in arr.actors" :key="item.name">
              <div :style="{backgroundImage:'url('+item.avatarAddress+')'}" class="avatarAddress"></div>
              <div>{{item.name}}</div>
              <div>{{item.role}}</div>
            </swiper-component-list>
          </swiper-component>
        </header>

        <div class="bgcolor"></div>

        <!-- 剧照 -->
        <footer>
          <div class="still-div">剧照</div>
          <swiper-component name="still" :page="2">
            <swiper-component-list v-for="(item,index) in arr.photos" :key="index">
              <div :style="{backgroundImage:'url('+item+')'}" class="still-photos" @click="ImagePreview(index)"></div>
            </swiper-component-list>
          </swiper-component>
        </footer>
      </section>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import moment from 'moment'
import swiperComponent from '@/components/films-swiper/SwiperComponent.vue'
import swiperComponentList from '@/components/films-swiper/SwiperComponentList.vue'
import topBar from '@/views/films/TopBar.vue'
import { ImagePreview } from 'vant'

Vue.filter('showFilter', data => moment(data * 1000).format('YYYY-MM-DD'))

Vue.directive('fixed', {
  inserted (item, el) {
    item.style.display = 'none'
    window.onscroll = () => {
      if ((document.documentElement.scrollTop || document.body.scrollTop) > el.value) {
        item.style.display = 'block'
      } else {
        item.style.display = 'none'
      }
    }
  },
  unbind () {
    window.onscroll = null
  }
})

export default {
  mounted () {
    axios.get(`https://m.maizuo.com/gateway?filmId=${this.$route.params.myid}&k=6145278`, {
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16666865834317825111949313","bc":"310100"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(item => { this.arr = item.data.data.film })
  },
  data () {
    return {
      arr: null,
      hidden: true
    }
  },
  components: {
    swiperComponent,
    swiperComponentList,
    topBar
  },
  methods: {
    ImagePreview (index) {
      ImagePreview({
        images: this.arr.photos,
        startPosition: index,
        closeable: true,
        closeIconPosition: 'top-left'
      })
    },
    handelBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
*{
  margin: 0;
}
.poster{
  height: 13.625rem;
  background-position: center;
  background-size: cover;
}

header section{
  display: flex;
  justify-content: space-between;
}
.introduce{
  padding: 15px;
  p{
    margin: 0;
    margin-top: .25rem;
    color: #797d82;
    font-size: .8125rem;
  }
  .titel{
    font-size: 1.125rem;
    color: black;
    span{
      font-size: .75rem;
      background-color: #d2d6dc;
      color: white;
      padding: 0 .125rem;
      vertical-align: top;
    }
  }
}

.score{
  color: #ffb232;
  font-size: 1.125rem;
  padding: .9375rem;
  span{
    font-size: .625rem;
  }
}

footer{
  color: #d2d6dc;
  font-size: .8125rem;
  line-height: .9375rem;
}
.hidden{
  overflow: hidden;
  height: 1.875rem;
}
.div-iconfont{
  text-align: center;
  color: #d2d6dc;
}
.actor{
  text-align: center;
  .actor-people{
    text-align: left;
    padding: .9375rem;
  }
  .avatarAddress{
    width: 5.3125rem;
    height: 5.3125rem;
    background-position: center;
    background-size: cover;
  }
  .avatarAddress + div{
    font-size: .75rem;
    padding-top: .625rem;
  }
  .avatarAddress + div + div{
    font-size: .625rem;
    color: #797d82;
  }
}

.still-photos{
  height: 5.25rem;
  background-position: center;
  background-size: cover;
}
.still-div{
  font-size: 1rem;
  color: black;
  padding: .9375rem;
}
.bgcolor{
  margin: .625rem 0;
  width: 100%;
  height: .625rem;
  background-color: rgba(119, 119, 119, 0.1);
}
.introduce{
  margin: 0 .5rem;
}
.root-div{
  margin-bottom: 3.0625rem;
}

.vant-icon{
  position: relative;
  top: .625rem;
  left: .625rem;
  font-size: 1rem;
}
</style>
