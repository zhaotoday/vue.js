import types from './types'
import Model from '@/models/admin/wx-users'

export default {
  async getList ({ commit }, { query }) {
    const { data } = await new Model().GET({ query })
    commit(types.GET_LIST, { data })
    return data
  }
}
