<template>
  <div>
    <h1 v-if="level===1" class='ui header'>
      <slot>标题</slot>
      <div class="sub header">
        <slot name="sub"></slot>
      </div>
    </h1>
    <h2 v-if="level===2" class='ui header'>
      <slot>标题</slot>
      <div class="sub header">
        <slot name="sub"></slot>
      </div>
    </h2>
    <h3 v-if="level===3" class='ui header'>
      <slot>标题</slot>
      <div class="sub header">
        <slot name="sub"></slot>
      </div>
    </h3>
    <h4 v-if="level===4" class='ui header'>
      <slot>标题</slot>
      <div class="sub header">
        <slot name="sub"></slot>
      </div>
    </h4>
    <h5 v-if="level===5" class='ui header'>
      <slot>标题</slot>
      <div class="sub header">
        <slot name="sub"></slot>
      </div>
    </h5>
    <h6 v-if="level===6" class='ui header'>
      <slot>标题</slot>
      <div class="sub header">
        <slot name="sub"></slot>
      </div>
    </h6>
  </div>
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
