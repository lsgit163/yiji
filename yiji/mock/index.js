var express = require('express');
var app = express();
var router = require('./router');
var bodyParser = require("body-parser");

// 配置中间件
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use('/',router);
app.listen(3001,function (){
  console.log(3001);
})
