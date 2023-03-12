import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    setItems(state, items) {
      state.items = items
    }
  },
  actions: {
    async fetchItems({ commit }) {
      const response = await fetch('https://rickandmortyapi.com/api/character')
      const items = await response.json()
      commit('setItems', items)
    }
  }
})