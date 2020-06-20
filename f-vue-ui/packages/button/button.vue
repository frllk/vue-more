<template>
  <!-- 思路：
  由于semantic-ui中按钮的大小是通过额外补充一个类，mini...massive来实现的，
  所以，在这里可以通过给外层容器动态绑定class -->
  <div class="ui button" :class="cClass">
    <!-- 如果传入了animated，则整个视图比较复杂，与不传animated是完全不同的，所以这里直接分两种情况 -->
    <!-- template：只是逻辑上的容器，并不会产生真实的dom -->
    <template v-if="animated">
      <div class="visible content">
        <!-- 具名插槽 -->
        <slot name="visible"></slot>
      </div>
      <div class="hidden content">
        <!-- 具名插槽 -->
        <slot name="hidden"></slot>
      </div>
    </template>
    <!-- 默认插槽：如果在使用组件时，传入内容就用传入的，否则显示“按钮” -->
    <template v-else>
      <slot>按钮</slot>
    </template>
  </div>
</template>

<script>
export default {
  // 组件的名字很重要
  name: 'MyButton',
  props: {
    size: {
      type: String,
      required: false,
      default: 'small',
      // validator 是对prop中接收的值进行校验。
      // 如果返回true，则表示通过校验，如果返回false，就给出错误提示
      validator (val) {
        // semantic-ui中支持的通过关键字设置大小是有限的。
        // 当用户传入一个不在支持范围内的值，就给一个错误的提示
        // mini tiny small medium large big huge massive
        // 如果val是上述关键字之一，返回true，否则 false
        console.log(val)
        const types = ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']
        return types.includes(val)
      }
    },
    color: {
      type: String,
      required: false,
      validator (val) {
        // black
        const colors = ['black', 'yellow', 'green', 'blue', 'orange', 'purple', 'red', 'pink', 'teal']
        return colors.includes(val)
      }
    },
    // 用它来接收传入的animated属性。有两种类型：boolean，字符串
    animated: {
      type: [Boolean, String],
      required: false
    }
  },
  computed: {
    cClass () {
      // 专门用来设置按钮的其他的类
      const classList = [this.size]
      if (this.animated) {
        classList.push('animated')
        // 如果值是字符串类型，则要额外在补充一个class表示动画的类型
        if (typeof this.animated === 'string') {
          classList.push(this.animated)
        }
      }
      if (this.color) {
        classList.push(this.color)
      }
      // vue在绑定class时，是支持直接给数组，所以不用join了，直接返回数组就好
      // return classList.join(' ')
      return classList
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang='less'></style>
