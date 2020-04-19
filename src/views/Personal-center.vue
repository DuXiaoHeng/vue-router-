<template>
    <div class="personal-center">
        姓名：<input v-model="name" />
        <button @click="handleClick">确定</button>
    </div>
</template>
<script>
export default {
    beforeRouteLeave (to, from, next) {
        console.log(to, from);
        if(!this.name){
            next();
            return;
        }
        const goFlag = window.confirm("当前输入的数据还未保存，是否确认跳转！");
        if(goFlag){
            next();
        }
    },
    data () {
        return { 
            name: ''
        }
    },
    methods: {
        handleClick () {
            this.name = '';
        }
    }
}
</script>
<style scoped>
    .personal-center{
        padding-top: 10px;
        padding-left: 8px;
        font-size: 14px;
        color: #333;
    }
    input{
        margin-right: 10px;
    }
</style>