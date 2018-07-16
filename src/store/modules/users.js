import vue from '../../main'

const usersState = {
  namespaced: true,
  state: {
    users: [
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBEb2UiLCJsb2dpbiI6ImMiLCJyb2xlIjoiYWRtaW4ifQ.k_-IR7JSPw7DkhrjoUhjDJ-qw_v6nwugIJSvho3qG08',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmV5IEJvcmQiLCJsb2dpbiI6ImIiLCJyb2xlIjoidXNlciJ9.XpciEEK_slo8yRRY_eWQ4veBVybrFlOMGls2qJpAgiE',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFjayBNYXJzdXMiLCJsb2dpbiI6ImEiLCJyb2xlIjoidXNlciJ9.vuDPkD_Po24Gb4ljC3zisu7_hgV-NhgRtlNuAr-kop4'
    ]
  },
  // element [0] is local state
  // element [1] is local getters
  // element [2] is global state
  // element [3] is global getters
  getters: {
    getUserByLogin: (...state) => login => {
      return state[0].users.filter(item => vue.$HotUtils.parseJwt(item).login === login)
    }
  },
  actions: {

  },
  mutations: {

  }
}

export default usersState
