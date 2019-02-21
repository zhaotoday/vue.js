export default {
  data () {
    return {
      id: 0
    }
  },
  async beforeRouteUpdate (to, from, next) {
    this.id = to.params.id
    next()
  },
  async created () {
    const { id } = this.$route.params
    this.id = id
  }
}
