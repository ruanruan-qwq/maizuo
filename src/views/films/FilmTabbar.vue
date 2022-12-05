<template>
    <div>
        <!-- 电影列表组件 -->

        <div v-for="item in arr" :key="item.filmId" @click="handleClick(item.filmId)">
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
            <footer v-opacity="buyTicket">
                <span class="ticket">购票</span>
            </footer>
          </div>
        </div>

    </div>
</template>

<script>
import Vue from 'vue'

Vue.filter('isactors', res => {
  return res?.map(item => item.name).join(' ')
})

Vue.directive('opacity', {
  bind (item, el) {
    item.style.opacity = el.value
  }
})

export default {
  props: {
    arr: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: () => []
    },
    buyTicket: {
      type: Number,
      default: 1
    }
  },
  methods: {
    handleClick (filmID) {
      this.$router.push(`/filmsnavbar/${filmID}`)
    }
  }
}
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
.navbar{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
img{
    height: 5.8406rem;
    margin: .5rem;
}
section p:nth-child(1){
    font-size: 1rem;
    margin-top: .625rem;
}
section p:nth-child(2),section p:nth-child(3),section p:nth-child(4){
    font-size: .8125rem;
    color: gray;
    margin: .3125rem 0;
}
section p:nth-child(3){
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 14rem;
}
.score{
    color: #ffb232;
}
.ticket{
    line-height: 1.5625rem;
    height: 1.5625rem;
    width: 3.125rem;
    color: #ff5f16;
    font-size: .8125rem;
    text-align: center;
    border-radius: .125rem;
    border: .0625rem solid #ff5f16;
    padding: .3125rem .625rem;
}
</style>
