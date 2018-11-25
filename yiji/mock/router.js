var express = require('express');
var router = express.Router();
var data1 = require('./list/home/homehot.js')
var data2 = require('./list/home/homehot2.js')
var search = require('./list/search')
var shop = require('./list/shop')
var detail = require('./list/detail')
var detailComment = require('./list/detail/comment.js')
var orderData = require('./list/shoppingcar')
var url = require("url");

router.get('/api/data1',function (req,res){
  res.send(data1);
})

router.get('/api/data2',function (req,res){
  res.send(data2);
})

router.get('/api/search',function (req,res){
  res.send(search);
})

router.get('/api/shop',function (req,res){
  res.send(shop);
})

router.get('/api/detail',function (req,res){
  res.send(detail);
})

router.get('/api/comment',function (req,res){
  res.send(detailComment);
})

router.get('/api/order',function (req,res){
  res.send(orderData);
})

router.post('/api/usercomment',function (req,res){
  var comment = req.param("usercomment");
  if(comment){
    res.send({
      msg:'success'
    })
  }else{
    res.send({
      msg:'error'
    })
  }
})
module.exports = router;
