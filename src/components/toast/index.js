import Vue from 'vue'
import Toast from './index.vue'

let instance = null
let timer = null

const ToastConstructor = Vue.extend(Toast)

ToastConstructor.prototype.close = function () {
  instance = null

  this.visible = false
  this.message = ''
  this.$destroy(true)
  this.$el.parentNode.removeChild(this.$el)
}

const toast = message => {
  if (instance) {
    instance.visible = true
    instance.message = message

    clearTimeout(timer)
  } else {
    instance = new ToastConstructor({
      el: document.createElement('div'),
      propsData: {
        visible: true,
        message
      }
    })

    document.body.appendChild(instance.$el)
  }

  Vue.nextTick(() => {
    instance.visible = true

    timer = setTimeout(() => {
      instance.close()
    }, 2500)
  })
}

export default toast
