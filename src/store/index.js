import { createStore } from "vuex";

export default createStore({
  state: {},
  getters: {},
  mutations: {
    ResetLikes: state => {
      state.posts.forEach(post => {
          post.likes = 0;
      })
  },
  },
  actions: {
    ResetLikesAct: act => {
      setTimeout(function() {
          act.commit("ResetLikes")
      }, 500)
  },
  },
  modules: {},
});
