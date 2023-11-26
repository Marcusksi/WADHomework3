<template>
   <!--<div class="header">
    <div class="content">
        <strong>Header</strong>
    </div>
    <div class="nav-links">
      <nav>
          <router-link to="/fetch">Main</router-link> |
          <router-link to="/signup">Signup</router-link>
      </nav>
    </div>
   </div>-->
   <div class="header">
    <ul class="content">
      <li class="headerText"><h2>Vue + VueX homework</h2></li>
      <li class="nav-links">
        <nav>
            <router-link to="/fetch">Main</router-link> 
            <a class="mid"> | </a>
            <router-link to="/signup">Signup</router-link>
        </nav>
      </li>
    </ul>
  </div>
</template>
  
  <script>
    export default {
        name: 'HeaderComp'
    }
  </script>
<style>
.header {
  color: #F7F9FB;
  background-color: #687864;
  border-radius: 15px;
  width: 100%;
  padding-bottom: 7px;
  padding-top: 5px;
  
}
.headerText{
  color:black;
}
.content{
  width: 100%;  
  padding-bottom: 10px;
  padding-top: 15px;
}
.nav-links{
  margin: 10px;
}
nav{
  text-align: center;
  color: #2c3e50;
  font-weight: bold;
  text-decoration: none;
}
nav a {
  color: #2c3e50;
  font-weight: bold;
  text-decoration: none;
  font-size: 120%;
}
nav .mid{
  font-size: 140%;
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: #42b94a;
  text-decoration: none;
}
  </style>