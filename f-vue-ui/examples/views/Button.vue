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
    <my-button color="pink" size="massive">massive pink</my-button>
    <br>
    <br>
    <my-button color="teal" size="massive">massive teal</my-button>
    <br>
    <br>
    <my-button color="orange1" size="massive1">超大按钮，测试提示error</my-button>
    <br>
    <br>
    <my-headline></my-headline>
  </div>
</template>
