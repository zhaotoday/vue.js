import BScroll from 'better-scroll'

export default {
  methods: {
    initScroll () {
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollY: true,
        click: true
      })
    }
  }
}
