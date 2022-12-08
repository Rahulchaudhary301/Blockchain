const express= require('express')
const route=require('./route/route')
const{ default: mongoose}=require('mongoose')
//const multer = require('multer')
const app=express()


app.use(express.json())

//app.use(multer().any())

mongoose.connect("mongodb+srv://RahulChaudhary:Rahul321@cluster1.42h1ws9.mongodb.net/coin?retryWrites=true&w=majority", {useNewUrlParser:true})
.then(()=>console.log("Mongo DB is connected sucessfully.."))
.catch((err)=> console.log((err)));


app.use("/",route)

app.listen(process.env.PORT || 3000 , function(req,res){
    console.log("Express app is running on port "+(process.env.PORT || 3000))
});
