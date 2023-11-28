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
  }
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

