import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      first_name: 'Moisés',
      last_name: 'Teixeira',
      email: 'moises@teixeira.com',
    },
    products: [],
    cart: []
  },
  mutations: {
    storeUser(state, data) {
      state.user = data
    }
  },
  actions: {
  },
  getters: {
  },
  modules: {
  }
})