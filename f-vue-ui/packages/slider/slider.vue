<template>
  <div class="slider">
    <div class="slider-content">
      <div v-for="(item,idx) in list" :key="idx" class="slider-item">
        <img v-show="idx===currIndex" :src="item.url" :alt="item.alt" />
      </div>
    </div>
    <span class="btn btn_left" @click="hPrev"></span>
    <span class="btn btn_right" @click="hNext"></span>

    <div class="txt">{{list[currIndex].alt}}</div>
    <ol class="indirector">
      <li v-for="(item,idx) in list"
      :key="idx"
      :class="{current: idx===currIndex}"
      ></li>

      <!-- <li class="current"></li>
      <li></li> -->
    </ol>
  </div>
</template>
<script>
export default {
  name: 'MySlider',
  data () {
    return {
      // 由于在子组件内部 ，不允许修改从父组件传入的props，所以这里补充定义一个数据项，从curIdx中获取初始值
      currIndex: this.curIdx
    }
  },
  // 不用直接去修改父组件中传过的值
  props: {
    // 自动播放间隔时长---毫秒数
    auto: {
      type: Number,
      required: false
    },
    // 默认显示哪一张图的下标
    curIdx: {
      type: Number,
      required: false,
      default: 0 // 默认显示下标为0的图
    },
    // 轮播列表
    list: {
      type: Array,
      required: true
    }
  },
  methods: {
    // 点击按钮，本质就是要修改当前项的下标
    hPrev () {
      // 上一张
      // 下标变小
      this.currIndex--
      if (this.currIndex === -1) {
        this.currIndex = this.list.length - 1
      }
    },
    hNext () {
      // 下一张
      // 下标变大
      this.currIndex++
      if (this.currIndex === this.list.length) {
        this.currIndex = 0
      }
    }
  }
}
</script>
<style>
.slider .slider-content,
.slider img {
  width: 100%;
  height: 100%;
}
.slider {
  margin: 0 auto;
  border: 1px solid #ccc;
  position: relative;
}
.slider .slider-content {
  overflow: hidden;
  position: relative;
}
.slider .slider-content .slider-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.slider img {
  width: 100%;
}
.slider .btn,
.slider .txt,
.slider .indirector {
  position: absolute;
}
.slider .btn {
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0);
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.2s;
}
.slider .btn:hover {
  background-color: rgba(255, 255, 255, 1);
}

.slider .btn:before,
.slider .btn:after {
  content: "";
  height: 3px;
  width: 25px;
  background-color: #fff;
  position: absolute;
  left: 15px;
  top: 23px;
  transform: rotateZ(60deg);
  transform-origin: 0px center;
  transition: all 0.2s;
}
.slider .btn:after {
  transform: rotateZ(-60deg);
}
.slider .btn:hover:before {
  transform: rotateZ(45deg);
  background-color: red;
}
.slider .btn:hover:after {
  transform: rotateZ(-45deg);
  background-color: red;
}

.slider .btn.btn_right:before,
.slider .btn.btn_right:after {
  transform-origin: right center;
}

.slider .btn.btn_left {
  left: 20px;
}
.slider .btn.btn_right {
  right: 20px;
}

.slider .txt {
  text-indent: 1em;
  line-height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: left;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #fff;
}
.slider .indirector {
  bottom: 10px;
  right: 1em;
}
.slider .indirector li {
  display: inline-block;
  margin: 0 5px;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #fff;
}
.slider .indirector li {
  transition: transform 0.2s;
}
.slider .indirector .current {
  background-color: #369;
  transform: scale(1.2);
}
</style>
