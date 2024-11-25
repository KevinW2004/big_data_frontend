import { createStore } from 'vuex'

export default createStore({
  state: {
    papers: []
  },
  getters: {
  },
  mutations: {
    set_papers(state, papers) {
      state.papers = papers
      console.log('set papers in store')
    }
  },
  actions: {
  },
  modules: {
  }
})
