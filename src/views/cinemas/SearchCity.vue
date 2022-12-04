<template>
  <!-- 搜索组件 -->
    <div>
        <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
        />
        <city-list v-if="value" :arr="computedList"></city-list>
    </div>
</template>

<script>
import cityList from '@/views/cinemas/CityList.vue'
import footerNabbarShow from '@/util/mixin'
export default {
  mixins: [footerNabbarShow],
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onSearch () {

    },
    onCancel () {
      this.$router.back()
    }
  },
  components: {
    cityList
  },
  computed: {
    computedList () {
      return this.$store.state.cinemaList.filter(item =>
        item.name.toUpperCase().includes(this.value.toUpperCase()) ||
      item.address.toUpperCase().includes(this.value.toUpperCase())
      )
    }
  }
}
</script>
