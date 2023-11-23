<template>
  <div class="fetch">
    <get-data :posts="posts"/>
  </div>

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
         fetch('http://localhost:3000/Posts')
        .then((response) => response.json())
        .then(data => this.posts = data)
        .catch(err => console.log(err.message))
    }
};
</script>

