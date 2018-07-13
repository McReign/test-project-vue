import Vue from 'vue'
import Vuex from 'vuex'
import usersState from './modules/users'
import currentUserState from './modules/currentUser'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    usersState,
    currentUserState
  }
})
