<template>
  <div class="about">
   <p>关于我们</p>
  </div>
</template>

<script>

export default {
  beforeRouteEnter (to, from, next){
    console.log('beforeRouteEnter')
    next();
  },
  beforeRouteLeave (to, from, next){
    console.log('beforeRouteLeave')
    next();
  },
  beforeRouteUpdate (to, from, next){

  }
}
</script>