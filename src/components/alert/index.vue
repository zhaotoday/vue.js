<template>
  <div>
    <div
      v-show="visible"
      class="c-overlay"
      @click="$emit('cancel')">
    </div>
    <div
      v-show="visible"
      class="c-alert">
      <div
        v-if="title"
        class="c-alert__title u-tac fs40">
        {{ title }}
      </div>
      <div class="c-alert__body u-tac fs32">
        <slot></slot>
      </div>
      <ul class="c-alert__foot o-grid u-tac fs36">
        <li
          class="o-grid__cell"
          @click="$emit('confirm')">
          确定
        </li>
        <li
          class="o-grid__cell c4"
          @click="$emit('cancel')">
          取消
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CAlert',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles/index.scss">
</style>
