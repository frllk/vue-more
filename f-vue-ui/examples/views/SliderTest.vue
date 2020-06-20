<template>
  <div class='home'>
    <h3>对轮播图组件的测试</h3>
    <my-slider style="width:900px; height:500px;"
    :auto="2000"
    :curIdx="curIdx"
    :list="list"
    ></my-slider>
    <my-divider></my-divider>
    <my-slider style="width:500px; height:300px;"
    :curIdx="curIdx"
    :list="list"
    ></my-slider>
  </div>
</template>

<script>
export default {
  name: 'SliderTest',
  data () {
    return {
      curIdx: 1, // 默认显示第二张图
      // 需要轮播的图片数据
      list: [
        { url: 'http://contentcms-bj.cdn.bcebos.com/cmspic/870d7d4f1549ffccb64a420acb848063.jpeg?x-bce-process=image/crop,x_0,y_0,w_899,h_490', alt: '离太阳最近的地方的一场春耕' },
        { url: 'http://contentcms-bj.cdn.bcebos.com/cmspic/011a0b86e8c9cc6588a1a7bf209f3a62.jpeg?x-bce-process=image/crop,x_0,y_0,w_1000,h_544', alt: '长江三峡水库' },
        { url: 'http://contentcms-bj.cdn.bcebos.com/cmspic/bed3d19847910372f8cd3dadb1bf3ab3.jpeg?x-bce-process=image/crop,x_0,y_0,w_785,h_428', alt: '月球方舟在格陵兰岛测试' },
        { url: 'http://contentcms-bj.cdn.bcebos.com/cmspic/5f906be951c371c500d89be50d48025d.jpeg?x-bce-process=image/crop,x_0,y_0,w_1000,h_544', alt: '虎门大桥水域恢复通航' },
        { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584438531340&di=0c69fbc0d55171aa8a1d2d107c3f7c87&imgtype=0&src=http%3A%2F%2Fimg21.mtime.cn%2Fpi%2F2011%2F01%2F12%2F134106.88324738_1000X1000.jpg', alt: '6.忠犬八公' },
        { url: 'http://pic5.997788.com/pic_search/00/17/34/94/se17349411.jpg', alt: '7.英雄本色' }
      ]
    }
  }
}
</script>

<style scoped lang='less'></style>
