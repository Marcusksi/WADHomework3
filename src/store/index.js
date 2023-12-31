import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [
      {
        "userId": 1,
        "id": 1,
        "profile": "profile_icon.png",
        "name": "Liana Hinton",
        "creationTime": "30.10.2023",
        "picture": "",
        "body": "I'm here, where is everybody?",
        "reaction": "like_logo2.png",
        "likes": 3
    },
    {
        "userId": 2,
        "id": 2,
        "profile": "profile_icon.png",
        "name": "Lara Bader",
        "creationTime": "30.09.2023",
        "picture": "",
        "body": "Thanks!",
        "reaction": "like_logo2.png",
        "likes": 0
    },
    {
        "userId": 3,
        "id": 3,
        "profile": "profile_icon.png",
        "name": "Rick Lawson",
        "creationTime": "30.08.2023",
        "picture": "https://tartu.ee/sites/default/files/field/image/delta.jpg",
        "body": "It's in UT Delta Centre building, Narva mnt 18, you can't miss it.",
        "reaction": "like_logo2.png",
        "likes": 58
    },
    {
        "userId": 2,
        "id": 4,
        "profile": "profile_icon.png",
        "name": "Lara Bader",
        "creationTime": "30.07.2023",
        "picture": "",
        "body": "Where is our next lecture? I don't know the city well enough.",
        "reaction": "like_logo2.png",
        "likes": 15
    },
    {
        "userId": 2,
        "id": 5,
        "profile": "profile_icon.png",
        "name": "Lara Bader",
        "creationTime": "30.06.2023",
        "picture": "",
        "body": "Oh, I seem to be a little bit late to join you guys.",
        "reaction": "like_logo2.png",
        "likes": 1
    },
    {
        "userId": 4,
        "id": 6,
        "profile": "profile_icon.png",
        "name": "Aidan Willett",
        "creationTime": "30.05.2023",
        "picture": "https://scontent-hel3-1.xx.fbcdn.net/v/t39.30808-6/405837331_1075838366729659_6405900484321895249_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AiqLA32JZRMAX8jNKDe&_nc_ht=scontent-hel3-1.xx&oh=00_AfDwve_BlSWFjm1Mrv0ANOtCngkwK2c5UvmkFNSKbwodbQ&oe=6564DFC4",
        "body": "Guys, here's today's lunch special. Join me if you can.",
        "reaction": "like_logo2.png",
        "likes": 0
    },
    {
        "userId": 1,
        "id": 7,
        "profile": "profile_icon.png",
        "name": "Liana Hinton",
        "creationTime": "30.04.2023",
        "picture": "",
        "body": "It looks awesome.",
        "reaction": "like_logo2.png",
        "likes": 0
    },
    {
        "userId": 3,
        "id": 8,
        "profile": "profile_icon.png",
        "name": "Rick Lawson",
        "creationTime": "30.03.2023",
        "picture": "",
        "body": "Welcome to our new page!",
        "reaction": "like_logo2.png",
        "likes": 218
    },
    {
        "userId": 1,
        "id": 9,
        "profile": "profile_icon.png",
        "name": "Liana Hinton",
        "creationTime": "30.02.2023",
        "picture": "",
        "body": "Hello!",
        "reaction": "like_logo2.png",
        "likes": -2
    },
    {
        "userId": 4,
        "id": 10,
        "profile": "profile_icon.png",
        "name": "Aidan Willett",
        "creationTime": "30.01.2023",
        "picture": "",
        "body": "Hi!",
        "reaction": "like_logo2.png",
        "likes": 0
    }
    ]
  },
  getters: {
    getPostById: state => id => {
      return state.posts.find(post => post.id === id);
    },
  },
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
      }, 100)
    },
  },
  modules: {},
});
