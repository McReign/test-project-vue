import vue from '../../main'

const currentUserState = {
  namespaced: true,
  state: {
    token: ''
  },
  getters: {
    getUsername: (state, getters) => {
      if (getters.isExists) {
        return vue.$HotUtils.parseJwt(state.token).name
      }
    },
    getRole: (state, getters) => {
      if (getters.isExists) {
        return vue.$HotUtils.parseJwt(state.token).role
      }
    },
    isExists: (state, getters) => {
      return !!state.token
    }
  },
  actions: {

  },
  mutations: {
    login: function (state, payload) {
      state.token = payload.user
    }
  }
}

export default currentUserState
