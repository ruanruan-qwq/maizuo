<template>
    <!-- 城市列表组件 -->
    <div>
        <ul>
            <li v-for="(item,index) in arr" :key="index">
                <div class="city-name">{{item.name}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props: {
    arr: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: []
    }
  }
}
</script>

<style lang="scss" scoped>
.city-name{
    font-size: 13px;
    height: 2.75rem;
    line-height: 2.75rem;
    margin-left: .9375rem;
    border-bottom: 1px solid #80808014;
}
</style>
