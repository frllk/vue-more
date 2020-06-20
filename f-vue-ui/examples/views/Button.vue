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
    <my-button color="black"></my-button>
    <br>
    <br>
    <my-button color="yellow" size="mini">普通按钮</my-button>
    <br>
    <br>
    <my-button color="green" size="large">按钮XXX</my-button>
    <br>
    <br>
    <my-button color="blue" size="massive">超大按钮</my-button>
    <br>
    <br>
    <my-button color="orange1" size="massive1">超大按钮，测试提示error</my-button>
    <br>
    <br>
    <my-headline></my-headline>
  </div>
</template>
