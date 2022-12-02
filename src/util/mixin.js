
const footerNabbarShow = {
  mounted () {
    this.$store.commit('hidden')
  },
  destroyed () {
    this.$store.commit('show')
  }
}

export default footerNabbarShow
