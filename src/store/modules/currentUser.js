const currentUserState = {
  namespaced: true,
  state: {
    token: ''
  },
  getters: {

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
