const express = require('express')
const app = express()
const port = 8000


app.listen(port,(req,res)=>{
    console.log("Server started at port",port)
})

app.get('/get',(req,res)=>{
    res.json({
        message:"helloworld"
    })
})

