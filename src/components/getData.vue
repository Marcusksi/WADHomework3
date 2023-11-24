<template>
<body>
    <section id = "sel">
        <div class="box" v-for="post in posts"   :key="post.index">
            <ul class="post">
                <li><a class="profile" href="#"><img :src="require(`../assets/${post.profile}`)" alt="Profile picture" :width="60"></a></li>
                <li><p class="date">{{post.creationTime}}</p></li>
                <a v-if= "post.picture != ''" class="aPicture" v-bind:href=post.picture><img v-bind:src=post.picture class="picture" alt="Post picture"></a>
                <p>{{post.body}}</p>
                <button @click="IncreaseLike(post)"><img class="reaction" :src="require(`../assets/${post.reaction}`)" :width="30" alt="Reaction picture"></button>
                <p>{{post.likes}}</p>
            </ul>
        </div> 
    </section>
</body>
</template>


<!--<style lang="css" scoped src="../css/indexStyle.css"> </style>-->
<style>
@import '../css/indexStyle.css';
@import '../css/style.css';
button{
    background: none;
    border: none;
}
</style>



<script>
export default {
    name: "getData",
    data: function() {
        return {
    }},
    computed: {
    posts(){
        return this.$store.state.posts
    },
    
    methods: {
    IncreaseLike(post) {
      post.likes++; // Increment the likes of the specific post
    }
    }
  }
}
/**export default {
    name: "getData",
    data: function() {
        return {
    }},
    computed: {
    posts(){
        return this.$store.state.posts
    },
    }
}
/**export default {
    name: "getData",
    props: ["posts"],
    methods: {
    IncreaseLike(post) {
      post.likes++; // Increment the likes of the specific post
    }
  }
}
**/
</script>