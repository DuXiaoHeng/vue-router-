<template>
    <div class="">
        <ul>
           <router-link tag="li" :to="{name: 'new', params:{id: item.newId}}" v-for="item in news" :key="item.newId">
               {{item.newBasis}}
           </router-link>
        </ul>
        <router-view></router-view>
    </div>  
</template>
<script>
export default {
    beforeRouteEnter (to, from, next){
        alert("欢迎来到新闻直播间")
        next();
    },
    data () {
        return {
            news: [
                {
                    newId: 2020101,
                    newBasis: "最新消息：深圳市2月10号前公司禁止上班"
                },
                {
                    newId: 2020102,
                    newBasis: "全国捐赠武汉的物质去哪了？"
                },
                {
                    newId: 2020103,
                    newBasis: "火神山，雷神山，即将建设完成，物质是否够用呢"
                }
            ]
        }
    }
}
</script>
<style scoped>
ul{
    margin-top: 10px;
    margin-bottom: 20px;
}
li{
    list-style: none;
    padding: 0;
    margin: 0;
    color: black;
    font-size: 16px;
    padding-left: 8px;
    line-height: 24px;
    cursor: pointer;
}
li:hover{
    color: aqua;
}
</style>