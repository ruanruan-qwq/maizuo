<template>
  <!-- 电影详情下拉显示返回组件 -->
    <div>
        <span class="iconfont icon-zuojiantou" @click="handelBack()"></span>
        <slot></slot>
    </div>
</template>

<script>
export default {
  methods: {
    handelBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
    div{
        text-align: center;
        height: 2.75rem;
        line-height: 2.75rem;
        position: fixed;
        top: 0;
        left: 0;
        background: white;
        width: 100%;
        span{
            height: 2.75rem;
            line-height: 2.75rem;
            position: fixed;
            left: .625rem;
            top: 0;
            font-size: 1.125rem;
        }
    }
</style>
