<template>
    <div class="A Post">
    <div id="form">
        <h3>A Post</h3>
        <label for="date"></label>
        <input name="type" type="text" id="title" required v-model="post.date" />
        <label for="body">Body: </label>
        <input name="body" type="text" id="body" required v-model="post.body" />
    </div>
    <div class="container">
        <button @click="updatePost" class="updatePost">Update Post</button>
        <button @click="deletePost" class="deletePost">Delete Post</button>
    </div>
    </div>
</template>

<script>
export default {
    name: "APost",
    data() {
    return {
        post: {
        id: "",
        date: "",
        body: "",
        },
    };
    },
    methods: {
    fetchAPost(id) {
        fetch(`http://localhost:3000/api/posts/${id}`)
        .then((response) => response.json())
        .then((data) => (this.post = data))
        .catch((err) => console.log(err.message));
    },
    updatePost() {
        fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(this.post),
        })
        .then((response) => {
            console.log(response.data);
            this.$router.push("/Fetch");
        })
        .catch((e) => {
            console.log(e);
        });
    },
    deletePost() {
        fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
            console.log(response.data);
            this.$router.push("/Fetch");
        })
        .catch((e) => {
            console.log(e);
        });
    },
    },
    mounted() {
    this.fetchAPost(this.$route.params.id);
    },
};
</script>