var mongoose = require('mongoose');

var beacon4 ={
  gnum:{type:String},
  bnum:{type:String},
  beacon:{type:String},
  status:{type:String},
  createdAt:{type:Date,default:Date.now},
};

module.exports =beacon4;
