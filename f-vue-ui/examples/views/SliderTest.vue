<template>
  <div class='home'>
    <h3>对轮播图组件的测试</h3>
    <my-slider style="width:900px; height:500px;"
    :auto="2000"
    :curIndex="curIndex"
    :list="list"
    ></my-slider>
  </div>
</template>

<script>
export default {
  name: 'SliderTest',
  data () {
    return {
      curIndex: 1, // 默认显示第二张图
      // 需要轮播的图片数据
      list: [
        // { url: require('./img/1.The Shawshank Redemption.jpg'), alt: '1.肖申克的救赎' },
        // { url: require('./img/2.Forrest Gump.jpg'), alt: '2.阿甘正传' },
        // { url: require('./img/3.The Pursuit of Happyness.jpg'), alt: '3.幸福来敲门' },
        // { url: require('./img/4.这个杀手不太冷.jpg'), alt: '4.这个杀手不太冷' },
        // { url: require('./img/5.WALL_E.jpg'), alt: '5.机器人总动员' },
        { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584438531340&di=0c69fbc0d55171aa8a1d2d107c3f7c87&imgtype=0&src=http%3A%2F%2Fimg21.mtime.cn%2Fpi%2F2011%2F01%2F12%2F134106.88324738_1000X1000.jpg', alt: '6.忠犬八公' },
        { url: 'http://pic5.997788.com/pic_search/00/17/34/94/se17349411.jpg', alt: '7.英雄本色' }
      ]
    }
  }
}
</script>

<style scoped lang='less'></style>
