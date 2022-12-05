<template>
    <div>
        <div @click="handelReturn()">返回</div>
        登录
    </div>
</template>

<script>
export default {
  methods: {
    handelReturn () {
      this.$router.back()
    }
  }
}
</script>
