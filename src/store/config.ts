import config from "_TYPE_/vuexConfig";

export default {
  namespaced: true,

  state:():config => ({
    count: 0
  }),

  mutations: {
    addCount(state: config) {
      console.log(111, state)
      state.count++;
    }
  }
}