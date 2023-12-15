
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
button:hover{
  cursor: pointer;
  background-color:  rgb(28, 143, 143);
}
button:active{
  background-color:  rgb(22, 116, 116);
}
</style>

