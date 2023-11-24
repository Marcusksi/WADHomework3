<template>
  <nav>
  
    <!--<router-link to="/">Home</router-link> |
    <router-link to="/form">Form Val.</router-link> | -->
    
    <router-link to="/fetch">Main</router-link> |
    <router-link to="/signup">Signup</router-link>
  </nav>

  <router-view />
  <AppFooter/>
</template>

<script>
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppFooter
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
  margin-top: 60px;
}
nav{
  padding-bottom: 10px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #4272b9;
}
</style>

