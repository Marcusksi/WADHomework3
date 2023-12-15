<template>
<body>
    <section id = "sel">
        <div class="container">
        <button @click="Logout" class="center">Logout</button>
        </div>
        <div class="box" v-for="post in posts"   :key="post.id">
            <ul class="post">
                <li><p class="date">{{post.date}}</p></li>
                <p>{{post.body}}</p>
            </ul>
        </div> 
    </section>
</body>
</template>

<script>
export default {
    name: "getData",
    data() {
        return {
            posts: [],
        };
    },
    
    methods: {
    IncreaseLike(post) {
        post.likes++;
    },
    fetchPosts() {
        fetch(`http://localhost:3000/api/posts/`)
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch((err) => console.log(err.message));
    },

    },
    mounted() {
    this.fetchPosts();
    console.log("mounted");
    },
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
