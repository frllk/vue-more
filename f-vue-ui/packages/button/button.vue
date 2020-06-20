<template>
  <div class=''>
    <div class="ui button">
      <!-- 默认插槽：如果在使用组件时，传入内容就用传入的，否则显示“按钮” -->
      <slot>按钮</slot>
    </div>
  </div>
</template>

<script>
export default {
  // 组件的名字很重要
  name: 'MyButton',
  data () {
    return {}
  }
}
</script>

<style scoped lang='less'></style>
