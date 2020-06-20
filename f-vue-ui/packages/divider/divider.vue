<template>
  <div class='ui divider horizontal'>
    <!-- 是否有图标，取决icon是否有值 -->
    <i v-if="icon" class="icon" :class="icon"></i>
    <!-- 默认插槽 -->
    <slot>divider</slot>
  </div>
</template>

<script>
export default {
  name: 'MyDivider',
  props: {
    icon: {
      type: String,
      required: false
    }
  }
}
</script>
