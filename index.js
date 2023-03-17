const express=require("express")

const app=express()

app.get('/',(ask,give)=>{
    give.send("AWS Server-1")
})

app.listen(3000,()=>{
    console.log("Server is running at 3000...");
})