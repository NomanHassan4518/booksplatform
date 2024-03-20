const express=require("express");
const cors=require("cors");
const app=express();

require("./collections/config")
let User=require("./collections/user")

app.use(express.json());
app.use(cors())

app.get("/",(req,resp)=>{
    resp.send("appi is working")
})

app.post("/register", async (req,resp)=>{
    let user = User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password
    resp.send(result)
})

app.listen(5000,()=>{
    console.log("working");
});