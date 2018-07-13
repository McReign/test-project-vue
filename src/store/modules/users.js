import vue from '../../main'

const usersState = {
  namespaced: true,
  state: {
    users: [
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBEb2UiLCJsb2dpbiI6ImMiLCJyb2xlIjoiYWRtaW4ifQ.k_-IR7JSPw7DkhrjoUhjDJ-qw_v6nwugIJSvho3qG08',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmV5IEJvcmQiLCJsb2dpbiI6ImIiLCJyb2xlIjoidXNlciJ9.XpciEEK_slo8yRRY_eWQ4veBVybrFlOMGls2qJpAgiE',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFjayBNYXJzdXMiLCJsb2dpbiI6ImEiLCJyb2xlIjoidXNlciJ9.vuDPkD_Po24Gb4ljC3zisu7_hgV-NhgRtlNuAr-kop4'
    ],
    usersData: [
      {
        login: 'c',
        items: [
          {
            money: 1213,
            desc: 'asdqwdasdcs df dfvdfv',
            type: 'costs'
          },
          {
            money: 2303,
            desc: 'wqwdksfnkjds dksdhbvsdn skdbf',
            type: 'admissions'
          },
          {
            money: 1213,
            desc: 'asdqwdasdcs df dfvdfv',
            type: 'costs'
          },
          {
            money: 2303,
            desc: 'wqwdksfnkjds dksdhbvsdn skdbf',
            type: 'admissions'
          },
          {
            money: 1213,
            desc: 'asdqwdasdcs df dfvdfv',
            type: 'costs'
          },
          {
            money: 2303,
            desc: 'wqwdksfnkjds dksdhbvsdn skdbf',
            type: 'admissions'
          },
          {
            money: 1213,
            desc: 'asdqwdasdcs df dfvdfv',
            type: 'costs'
          },
          {
            money: 2303,
            desc: 'wqwdksfnkjds dksdhbvsdn skdbf',
            type: 'admissions'
          },
          {
            money: 1213,
            desc: 'asdqwdasdcs df dfvdfv',
            type: 'costs'
          },
          {
            money: 2303,
            desc: 'wqwdksfnkjds dksdhbvsdn skdbf',
            type: 'admissions'
          },
          {
            money: 1213,
            desc: 'asdqwdasdcs df dfvdfv',
            type: 'costs'
          },
          {
            money: 2303,
            desc: 'wqwdksfnkjds dksdhbvsdn skdbf',
            type: 'admissions'
          },
          {
            money: 1213,
            desc: 'asdqwdasdcs df dfvdfv',
            type: 'costs'
          },
          {
            money: 2303,
            desc: 'wqwdksfnkjds dksdhbvsdn skdbf',
            type: 'admissions'
          },
          {
            money: 1213,
            desc: 'asdqwdasdcs df dfvdfv',
            type: 'costs'
          },
          {
            money: 2303,
            desc: 'wqwdksfnkjds dksdhbvsdn skdbf',
            type: 'admissions'
          },
          {
            money: 1213,
            desc: 'asdqwdasdcs df dfvdfv',
            type: 'costs'
          },
          {
            money: 2303,
            desc: 'wqwdksfnkjds dksdhbvsdn skdbf',
            type: 'admissions'
          }
        ]
      },
      {
        login: 'a',
        items: [
          {
            money: 1213,
            desc: 'asdqwdasdcs df dfvdfv',
            type: 'costs'
          },
          {
            money: 2303,
            desc: 'wqwdksfnkjds dksdhbvsdn skdbf',
            type: 'admissions'
          }
        ]
      },
      {
        login: 'b',
        items: [
          // {
          //   money: 1213,
          //   desc: 'asdqwdasdcs df dfvdfv',
          //   type: 'costs'
          // },
          // {
          //   money: 2303,
          //   desc: 'wqwdksfnkjds dksdhbvsdn skdbf',
          //   type: 'admissions'
          // },
          // {
          //   money: 1213,
          //   desc: 'asdqwdasdcs df dfvdfv',
          //   type: 'costs'
          // },
          // {
          //   money: 2303,
          //   desc: 'wqwdksfnkjds dksdhbvsdn skdbf',
          //   type: 'admissions'
          // }
        ]
      }
    ]
  },
  getters: {
    getUserByLogin: state => login => {
      return state.users.filter(item => vue.$HotUtils.parseJwt(item).login === login)
    },
    getCardsByLogin: state => login => {
      return state.usersData.filter(item => item.login === login)[0].items
    },
    getCardsByType: state => ({login, type}) => {
      // console.log(state.usersData.filter(item => item.login === login))
      return state.usersData.filter(item => item.login === login)[0].items.filter(item => item.type === type)
    }
  },
  actions: {
    login () {

    }
  },
  mutations: {
    login () {

    }
  }
}

export default usersState
