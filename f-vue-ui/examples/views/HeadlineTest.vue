<template>
  <div class=''>
    <h3>对标题组件进行测试</h3>
    <my-headline></my-headline>
    <my-headline :level="1">一级标题</my-headline>
    <my-headline :level="2">二级标题<div slot="sub">副标题</div></my-headline>
  </div>
</template>
