const express=require('express');
const pmrouter=express.Router();
const{getAllPms}=require('../route/pm.controller')

pmrouter.get('/',getAllPms);

module.exports=pmrouter;