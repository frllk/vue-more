<template>
  <!-- 思路：
  由于semantic-ui中按钮的大小是通过额外补充一个类，mini...massive来实现的，
  所以，在这里可以通过给外层容器动态绑定class -->
  <div class="ui button" :class="cClass">
    <!-- 默认插槽：如果在使用组件时，传入内容就用传入的，否则显示“按钮” -->
    <slot>按钮</slot>
  </div>
</template>

<script>
export default {
  // 组件的名字很重要
  name: 'MyButton',
  props: {
    size: {
      type: String,
      required: false
    },
    color: {
      type: String,
      required: false
    }
  },
  computed: {
    cClass () {
      // 专门用来设置按钮的其他的类
      const cls = []
      if (this.size) {
        cls.push(this.size)
      }
      if (this.color) {
        cls.push(this.color)
      }
      return cls
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang='less'></style>
