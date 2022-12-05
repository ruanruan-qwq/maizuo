<template>
    <div>
        <!-- 功能列表 订单..设置 -->
        <van-icon :name="icon" class="van-iocn" :color="color" />
        <span>{{titel}}</span>
        <van-icon name="arrow" class="right" />
    </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'like-o'
    },
    titel: {
      type: String,
      default: '♥'
    },
    color: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
    div{
        height: 3.0625rem;
        line-height: 3.0625rem;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #00000014;
    }
    .van-iocn{
        font-size: 1.25rem;
        padding: 15px;
    }
    span{
        font-size: .9375rem;
        width: 300px;
        display: inline-block;
    }
    .right{
        font-size: .9375rem;
        color: #d0cacaa8;
    }
</style>
