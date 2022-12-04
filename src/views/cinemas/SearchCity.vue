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
        <cinema-list v-if="value" :arr="computedList"/>
    </div>
</template>

<script>
import cinemaList from '@/views/cinemas/CinemaList.vue'
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
    cinemaList
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
