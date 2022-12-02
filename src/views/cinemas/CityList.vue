<template>
    <!-- 电影列表组件 -->
    <div>
        <ul>
              <li v-for="item in arr" :key="item.cinemaId">
                  <section>
                      <p class="name">{{item.name}}</p>
                      <p class="address">{{item.address}}</p>
                  </section>

                  <section>
                      <p class="lowPrice">￥{{item.lowPrice/100}}起</p>
                  </section>
              </li>
          </ul>
    </div>
</template>

<script>
export default {
  props: {
    arr: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
   li{
        padding: .9375rem;
        display: flex;
        justify-content: space-between;
        .name{
            font-size: .9375rem;
        }
        .address{
            font-size: .75rem;
            color: #797d82;
            width: 13.75rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .lowPrice{
            color: #ff5f16;
            font-size: .9375rem;
        }
    }
</style>
