import Model from '@/models/public/users'

export default {
  postAction ({ commit }, { query, body }) {
    return new Model().addPath('actions').POST({ query, body })
  }
}
