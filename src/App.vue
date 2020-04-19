<template>
  <div id="app">
    <div id="nav">
      <div class="nav-log">
        vue-router
      </div>
      <ul>
        <li>
          <router-link to="/home">Home</router-link> 
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/community">Community</router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<style>

*{
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}

#nav {
  height: 50px;
  background-color:#2196F3;
}

#nav .nav-log{
  float: left;
  height: 50px;
  line-height: 50px;
  margin-left: 100px; 
}

#nav ul{
  height: 50px;
  line-height: 50px;
  width: 700px;
  float: right;
}

#nav ul li{
 float: left; 
 width: 50px;
 margin-left: 10px;
}


#nav a {
  font-size: 16px;
  color: white;
}

/* 路由绝对匹配时  router-link-exact-active */
/* 路由匹配时  router-link-active */
#nav a.router-link-active { 
  font-size: 18px;
  font-weight: bold;
}

.home{
  font-size: 36px;
  padding: 50px 100px;
  color: black;
}
</style>
