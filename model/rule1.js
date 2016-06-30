var mongoose = require('mongoose');

var rule1 ={
  rule1:{type:String},
  range1:{type:String},
  createdAt:{type:Date,default:Date.now},
};

module.exports =rule1;
