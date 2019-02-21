import time from 'jt-time'
import consts from '@/utils/consts'
import helpers from '@/utils/helpers/base'
import auth from '@/utils/auth'
import toast from '@/components/toast'
import globalMixin from '@/mixins/global'

export default {
  install (Vue) {
    Vue.prototype.$time = time
    Vue.prototype.$consts = consts
    Vue.prototype.$helpers = helpers
    Vue.prototype.$auth = auth
    Vue.prototype.$toast = toast

    Vue.filter('time', val => time.getTime(val))
    Vue.filter('date', val => time.getDate(val))

    Vue.mixin(globalMixin)
  }
}
