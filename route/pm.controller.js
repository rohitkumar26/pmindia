const result=require('../model/pm.model')

function getAllPms(req,res){
   return res.status(200).json(result);
}

module.exports={
    getAllPms
}