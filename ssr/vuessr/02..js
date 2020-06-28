// 02.js
// 这个页面中使用了express搭建后端服务器
// 收到用户的请求之后，使用vue-server-renderer来把vue实例转成html代码并返回
const express = require('express');

const app = express()

const Vue = require('vue')

const renderer = require('vue-server-renderer').createRenderer()

app.get("/index.html",(req,res)=>{
	
	let template= `
	<ul>
		<li v-for="(item,idx) in list" :key="idx">
			<h3>{{item.author}}</h3>
			<div>{{item.content}}</div>
		</li>
	</ul>
	`
	const data = {
		list:[{author:"李白",content:"举杯邀明月"},
		{author:"杜甫",content:"喝酒不开车"},
		{author:"杜甫",content:"喝酒不开车"}]
	}
	const vm = new Vue({
	  template,
	  data
	})

	renderer.renderToString(vm, (err, html) => {
	  if (err) throw err
	  res.send(html)
	})
})

app.listen(3000,()=>{
	console.log('3000');
})