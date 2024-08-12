const Express=require("express")
const Mongoose=require("mongoose")
const Bcrypt=require("bcrypt")
const Cors=require("cors")
const jsonwebtoken=require("jsonwebtoken")
let app=Express()
app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(3031,()=>{
    console.log("server started")
})