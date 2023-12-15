<template>
    <body class="body">
        <section>
        <div class="center">
            <h3>Add Post</h3>
            <div class="div2">
                <label for="body">Body: </label>
                <input name="body" type="text" id="body" required v-model="post.body" placeholder="body"/>
            </div>
            <button @click="addPost" class="btn">Add</button>
        </div>
        </section>
    </body>
</template>
    
    <script>
    export default {
    name: "AddPost",
    data() {
        return {
        post: {
            date: "",
            body: "",
        },
        };
    },
    methods: {
        addPost() {
        var data = {
            date: this.post.date,
            body: this.post.body,
        };
        fetch("http://localhost:3000/api/posts", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then((response) => {
            console.log(response.data);
            this.$router.push("/Fetch");
        })
        .catch((e) => {
            console.log(e);
            console.log("error");
        });
        },
    },
    };    
</script>

<style>
    .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 0%;
}
</style>