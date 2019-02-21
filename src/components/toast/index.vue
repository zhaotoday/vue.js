<template>
  <div
    v-show="visible"
    class="c-toast c1 fs12">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'CToast',
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles/index.scss">
</style>
