<template>
<body>
    <section id = "sel">
        <div class="box" v-for="post in posts"   :key="post.index">
            <ul class="post">
                <li><a class="profile" href="#"><img :src="require(`../assets/${post.profile}`)" alt="Profile picture" :width="60"></a></li>
                <p>{{ post.name }}</p>
                <li><p class="date">{{post.creationTime}}</p></li>
                <a v-if= "post.picture != ''" class="aPicture" v-bind:href=post.picture><img v-bind:src=post.picture class="picture" alt="Post picture"></a>
                <p>{{post.body}}</p>
                <div class="likeBox">
                    <img v-on:click="IncreaseLike(post)" class="reaction reactionAnimation" :src="require(`../assets/${post.reaction}`)" :width="30" :height="30" alt="Reaction picture">
                    <p class="likeText">{{post.likes}} likes</p>
                </div>
            </ul>
        </div> 
    </section>
</body>
</template>

<script>
export default {
    name: "getData",
    data: function() {
        return {
    }},
    computed: {
    posts(){
        return this.$store.state.posts
    }
    },
    
    methods: {
    IncreaseLike(post) {
        post.likes++;
    },
  }

  
}


</script>

<!--<style lang="css" scoped src="../css/indexStyle.css"> </style>-->
<style>
@import '../css/indexStyle.css';
@import '../css/style.css';
button{
    background: none;
    border: none;
}


</style>
