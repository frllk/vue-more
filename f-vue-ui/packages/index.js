/**
 * 收集所有packages下面的组件，并按vue插件的格式做导出
 */
import Button from './button/button.vue'
import MyHeadline from './headline/headline.vue'
import 'semantic-ui-css/semantic.css'

export default {
  install (Vue) {
    // 实现组件的注册
    // 创建全局组件
    Vue.component(Button.name, Button)
    Vue.component(MyHeadline.name, MyHeadline)
  }
}
