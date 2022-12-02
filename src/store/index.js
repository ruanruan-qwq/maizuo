import Vue from 'vue'
import Vuex from 'vuex'
import axiosCapsulation from '@/util/axios-capsulation'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  // vuex 持久化
  plugins: [createPersistedState({
    // 可以定义存入到哪个 storage 中
    // storage: window.sessionStorage // 默认是 localstorage

    // reducer 会接收一个函数 形参为 全部state 返回值为表示要存入的内容
    reducer (state) {
      return {
        cityName: state.cityName,
        cityId: state.cityId
      }
    }
  })],
  // state 公共状态
  state: {
    cityName: '上海',
    cityId: '310100',
    cinemaList: [],
    isfooterNabbarShow: true
  },
  // 异步请求
  actions: {
    changeCinemaData (store, cityId) {
      return axiosCapsulation({
        url: `/gateway?cityId=${cityId || store.state.cityId}&ticketFlag=1&k=5077200`,
        headers: {
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then(res => {
        store.commit('cinemaList', res.data.data.cinemas)
      })
    }
  },
  // 统一管理状态
  mutations: {
    changeCityName (state, cityName) {
      state.cityName = cityName
    },
    changeCityId (state, cityId) {
      state.cityId = cityId
    },
    cinemaList (state, cinemaList) {
      state.cinemaList = cinemaList
    },
    show (state) {
      state.isfooterNabbarShow = true
    },
    hidden (state) {
      state.isfooterNabbarShow = false
    }
  }
})
