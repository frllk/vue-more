<template>
  <div class="about">
    <h1>测试button组件的使用</h1>
    <my-button color="red" animated>
      <div slot="hidden">$10000</div>
      <div slot="visible">鼠标放上来看看</div>
    </my-button>
    <my-button color="orange" animated="fade">
      <div slot="hidden">$10000</div>
      <div slot="visible">鼠标放上来看看</div>
    </my-button>
    <my-button color="green" animated="vertical">
      <div slot="hidden">$10000</div>
      <div slot="visible">鼠标放上来看看</div>
    </my-button>
    <hr>
    <my-button></my-button>
    <br>
    <br>
    <my-button color="black" size="mini">mini black</my-button>
    <br>
    <br>
    <my-button color="yellow" size="tiny">tiny yellow</my-button>
    <br>
    <br>
    <my-button color="green" size="small">small green</my-button>
    <br>
    <br>
    <my-button color="blue" size="medium">medium blue</my-button>
    <br>
    <br>
    <my-button color="orange" size="large">large orange</my-button>
    <br>
    <br>
    <my-button color="purple" size="big">big purple</my-button>
    <br>
    <br>
    <my-button color="red" size="huge">huge red</my-button>
    <br>
    <br>
    <my-button loading color="pink" size="massive">massive pink</my-button>
    <br>
    <br>
    <!-- 这是一个自定义的组件
    @click相当是监听这个组件内部的click的事件。
    click事件是一个特殊的事件名：
      1）如果你加在原生的html标签，它是直接生效的。
      2）但是，你不能直接加在组件上，除非你自己在组件内部抛出这个事件来。
    -->
    <my-button @click="hClick" color="teal" size="massive">massive teal 点我 </my-button>
    <br>
    <br>
    <my-button color="orange1" size="massive1">超大按钮，测试提示error</my-button>
    <br>
    <br>
    <button @click="hClick">点我</button>
    <br>
    <br>
    <my-headline></my-headline>
  </div>
</template>
<script>
export default {
  methods: {
    hClick () {
      alert(1)
    }
  }
}
</script>
