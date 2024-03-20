const express=require("express");
const app=express();

app.get("/",(req,resp)=>{
    resp.send("appi is working")
})

app.listen(5000,()=>{
    console.log("working");
})