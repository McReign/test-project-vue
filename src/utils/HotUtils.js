const HotUtils = {
  install: function (Vue, options) {
    Vue.prototype.$HotUtils = {
      parseJwt: function (token) {
        const base64Url = token.split('.')[1]
        const base64 = base64Url.replace('-', '+').replace('_', '/')
        return JSON.parse(window.atob(base64))
      },
      checkRole: function (role) {
        return this.parseJwt(Vue.store.state.currentUserState).role === role
      }
    }
  }
}

export default HotUtils
