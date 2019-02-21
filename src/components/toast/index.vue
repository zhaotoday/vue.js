<template>
  <div
    v-show="visible"
    class="c-toast c1 fs3">
    {{ message }}
  </div>
</template>

<script>
  export default {
    name: 'Toast',
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

<style lang="scss" scoped src="./styles/index.scss"></style>
