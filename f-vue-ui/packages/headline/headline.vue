<script>
export default {
  name: 'MyHeadline',
  props: {
    level: {
      type: Number,
      required: false,
      default: 3
    }
  },
  render (h) {
    // 如何在代码中获取插槽的内容？
    // 答： 通过this.$slots获取所有的插槽信息
    // 默认插槽： this.$slots.default
    // 具名插槽： this.$slots.插槽名字
    console.log(this.$slots)
    const vList = [this.$slots.default]
    if (this.$slots.sub) {
      // 生成一个副标题需要的Vnode
      const sub = h('div', { class: 'sub header' }, this.$slots.sub[0].children)
      vList.push(sub)
    }
    // 参数1：hX标签
    // 参数2：hX标签的描述
    // 参数3：数组。就这个hX标签的子元素
    return h('h' + this.level, { class: 'ui header' }, vList)
  }
}
</script>
