import vue from '../../main'
// import usersData from '../../../server/data/usersData'
import api from '../../services/Api'

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
      return new Promise((resolve, reject) => {
        api().post('/login', {
          login: payload.login
        })
          .then((res) => {
            commit('setUsername', res.data)
            resolve()
          })
          .catch((error) => reject(error))
      })
    },
    getCards: function ({ commit, state, getters }, payload) {
      return new Promise((resolve, reject) => {
        api().get(`/getCards?login=${payload.login}`)
          .then(res => {
            commit('setCards', res.data)
            resolve()
          })
          .catch((error) => reject(error))
      })
    },
    logout: function ({ commit, state }, payload) {
      commit('setUsername', '')
      commit('setCards', {cards: []})
    }
  },
  mutations: {
    setUsername (state, payload) {
      state.token = payload.token
    },
    setCards (state, payload) {
      state.cards = payload.cards
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
