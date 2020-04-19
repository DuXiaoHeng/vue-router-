<template>
  <div class="community">
    <div class="nav">  
      <router-link tag="li"  to="/community/discuss">学术讨论</router-link>
      <router-link tag="li" :to="{name: 'down'}">资源下载</router-link>
      <router-link tag="li" :to="{path: '/community/personalCenter'}">个人中心</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style scoped>
  .community{
    padding-left: 100px;
    padding-top: 10px;
  }
  .nav li{
    color: #333;
    display: inline-block;
    margin: 8px;
    cursor: pointer;
  }
  .router-link-exact-active{
    font-weight: bold;
  }
</style>