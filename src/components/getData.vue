<template>
    <section id = "sel">
        <div class="post-list box" v-for="post in posts"   :key="post.index">
            <div class="post">
                <li><a class="profile" href="#"><img :src="require(`../assets/${post.profile}`)" alt="Profile picture" :width="60"></a></li>
                <li><p class="date">{{ post.creationTime}}</p></li>
                <!--<a class="picture" href="res/images/delta.png"><img src="res/images/delta.png" width="75%" alt="Post picture"></a>
                <p>University of Tartu Delta Centre</p>
                <a class="reaction" href="#"><img src="res/images/like_logo2.png" width="30px" alt="Reaction picture"></a>
                -->
            </div>
        </div> 
    </section>
</template>


<script>

export default {
    name: "getData",
    props: ["posts"]
}
</script>

<style scoped>
body {
    position: relative;
}

.post {
    width: 80%;
    position: relative;
    padding: 10px;
    margin: 10px auto;
    border: 1px solid gray;
    text-align: left;
}
</style>