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

// 整体这一段代码的功能:
// 用App.vue的内容替换public/index.html中的那个id名为#app的dom

const vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
}) // .$mount('#app')
console.log(vm)
// 格式上来看：
// render:渲染。在这里它就是一个配置项。它是一个函数，并且，这里采用箭头函数的简写方式
// render: function(h) {
//   return h(App)
// }
// 上面的代码中，h是一个形参。在bue执行render会自动传入实参

// render的作用是：指定渲染函数。

// .$mount('#app')
// $mount的作用是把前面产生的vue实例挂载到一个id名为#app的dom元素上。
// 在本项目，这个dom就是public/index.html中的#app
// 下面两种写法是等价。
// new Vue({}).$mount('#app')   <====> new Vue({el: '#app})
