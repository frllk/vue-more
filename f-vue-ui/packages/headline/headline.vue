<template>
  <h3 class='ui header'>
    <slot>标题</slot>
    <div class="sub header">
      <slot name="sub"></slot>
    </div>
  </h3>
</template>

<script>
export default {
  name: 'MyHeadline',
  props: {
    level: {
      type: Number,
      required: false,
      default: 3
    }
  }
}
</script>

<style scoped lang='less'></style>
