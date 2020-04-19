import Vue from 'vue'
import App from './App.vue'
import router from './router/router'

Vue.config.productionTip = false
router.beforeEach((to , from , next)=>{//全局前置守卫
  console.log('beforeEach');
  next();
})
router.beforeResolve((to, from, next) => {//全局解析守卫
  console.log('beforeResolve');
  next();
})
router.afterEach((to, from, next) => {//全局后置钩子
  console.log('afterEach');
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
