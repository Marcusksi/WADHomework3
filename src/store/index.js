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
     IncreaseLike:  state => {
      state.posts.forEach(post => {//vb ebavajalik
        if(post==postId)
          post.likes++;
      })
    },
  },
  actions: {
    ResetLikesAct: act => {
      setTimeout(function() {
          act.commit("ResetLikes")
      }, 500)
    },
      IncreaseLikeAct({commit}, postId){
        commit(IncreaseLike, postId);//vb ebavajalik
      },
  },
  modules: {},
});
