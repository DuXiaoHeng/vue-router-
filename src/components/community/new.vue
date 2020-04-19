<template>
    <div class="new">
        <p>{{curNew && curNew.newBasis}}</p>
        <div class="btn">
            <hr/>
            <button class="first" v-if="this.curNewId != this.minId" @click="goPrevious">上一条</button>
            <button v-if="this.curNewId != this.maxId" @click="goNext">下一条</button>
        </div>
    </div>
</template>
<script>
export default {
    beforeRouteUpdate(to, from, next) {
        const curId = to.params.id;
        this.initNew(curId);
        console.log('beforeRouteUpdate')
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
            ],
            curNewId: 0,
            curNew: null,
            minId: 0,
            maxId: 0
        }
    },
    mounted (){
        this.minId = this.news[0].newId;
        this.maxId = this.news[this.news.length-1].newId;
        this.initNew(this.$route.params.id);
    },
    methods:{
        goPrevious() {
            this.curNewId --;
            this.$router.push({params: {id: this.curNewId}});
            // this.initNew();
        },
        goNext() {
            this.curNewId ++;
            this.$router.push({name:'new', params: {id: this.curNewId}});
            // this.initNew();
        },
        initNew(id) {
            this.curNewId = id;
            this.curNew = this.news.find(item => item.newId == id);

        }
    }
}
</script>
<style scoped>
    .new{
        margin-top: 30px;
        text-align: center;
    }
    p{
        color: #333;
    }
    .btn{
        margin-top: 10px;
    }
    button{
        margin-top: 10px;
        padding: 4px 8px;
    }
    .first{
        margin-right: 10px;
    }
</style>