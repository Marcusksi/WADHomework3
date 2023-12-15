<template>
  <!--<nav>
    <router-link to="/fetch">Main</router-link> |
    <router-link to="/signup">Signup</router-link>
  </nav>-->
<!--<router-link to="/">Home</router-link> |
    <router-link to="/form">Form Val.</router-link> | -->
  <HeaderComp/>
  <router-view class="view"/>
  <AppFooter/>
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import HeaderComp from './components/HeaderComp.vue'

export default {
  name: 'App',
  components: {
    AppFooter, HeaderComp
  },
  methods: {
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        //console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/login");
        //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
  text-align: center;
}
.view{
  position: relative;
  padding-bottom: 100px;
}
/*nav{
  padding-bottom: 10px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #4272b9;
}*/
</style>

