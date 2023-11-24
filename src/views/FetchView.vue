<template>
  <get-data :posts="posts"/>
  <button v-on:click="ResetLikes"> Reset likes </button>
</template>


<script>
// @ is an alias to /src
import getData from "@/components/getData.vue";   

export default {
  name: "FetchView",
  components: {
    getData
  },
  data: function() {
    return {posts:[]}
    },
    mounted() {
         fetch('http://localhost:3000/posts')
        .then((response) => response.json())
        .then(data => this.posts = data)
        .catch(err => console.log(err.message))
    },
  methods: {
    ResetLikes: function() {
      this.$store.dispatch("ResetLikesAct")
    }
  }
};
</script>
<style scoped>
button{
background:  rgb(31, 163, 163);
border: 0;
padding: 10px 20px 10px 20px;
margin-top:  20px;
margin-bottom:  20px;
margin-right:  10px;
color: white;
border-radius: 20px;
}
</style>

