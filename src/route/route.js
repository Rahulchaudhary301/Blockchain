const express=require('express')
const router=express.Router()
const coinController=require('../coinController/coin')



router.get('/test-me', function(req,res){
     res.send({status:true, msg: "successs....."})
})


router.get('/get_bit_coins', coinController.getCoin )





module.exports=router
