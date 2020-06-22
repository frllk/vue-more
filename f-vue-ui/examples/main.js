import Vue from 'vue'
import App from './App.vue'
import router from './router'

import UI from '../packages/index.js'
// 会调用packages/index.js中那个对象的install方法
// 就会创建全局组件MyButton
Vue.use(UI)

console.log(UI)

Vue.config.productionTip = false
console.log(Vue)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
