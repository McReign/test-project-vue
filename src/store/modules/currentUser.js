import vue from '../../main'
import usersData from '../usersData'

const currentUserState = {
  namespaced: true,
  state: {
    token: '',
    cards: []
    // cards: usersData.filter(item => item.login === vue.$HotUtils.parseJwt(this.token))[0].items
  },
  // element [0] is local state
  // element [1] is local getters
  // element [2] is global state
  // element [3] is global getters
  getters: {
    getUsername: (state, getters) => {
      if (getters.isExists) {
        return vue.$HotUtils.parseJwt(state.token).name
      }
    },
    getLogin: (state, getters) => {
      if (getters.isExists) {
        return vue.$HotUtils.parseJwt(state.token).login
      }
    },
    getRole: (state, getters) => {
      if (getters.isExists) {
        return vue.$HotUtils.parseJwt(state.token).role
      }
    },
    isExists: (state, getters) => {
      return !!state.token
    },
    getCurrentUserCards: (...state) => {
      return state[0].cards
    },
    getCardsByType: (...state) => type => {
      return state[1].getCurrentUserCards.filter(item => item.type === type)
    },
    getCardById: (...state) => id => {
      return state[1].getCurrentUserCards.filter(item => item.id === id)[0]
    }
  },
  actions: {
    login: function ({ commit, state, getters }, payload) {
      commit('setUsername', payload)
      commit('setCards', usersData.filter(item => item.login === getters.getLogin)[0].items)
    },
    logout: function ({ commit, state }, payload) {
      commit('setUsername', '')
      commit('setCards', [])
    }
  },
  mutations: {
    setUsername (state, payload) {
      state.token = payload.user
    },
    setCards (state, payload) {
      state.cards = payload
    },
    addCard (state, payload) {
      state.cards = state.cards.concat(payload)
    },
    editCard (state, payload) {
      state.cards = state.cards.map(item => item.id === payload.id
        ? {
          ...item,
          money: payload.money,
          desc: payload.desc,
          type: payload.type
        }
        : item
      )
    },
    deleteCard (state, payload) {
      state.cards = state.cards.filter(item => item.id !== payload.id)
    }
  }
}

export default currentUserState
