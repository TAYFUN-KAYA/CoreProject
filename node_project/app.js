
const express = require('express');

const app = express()

const port = 5555;

app.get('/',(req,res)=>{
    res.send('Anasayfa');
})

app.get('/staj',(req,res)=>{
    res.send("Hello World from Node.JS!");
})

app.get('/kartaca',(req,res)=>{
    res.send("Kartaca");
})

app.listen(port,()=>{
    console.log("5555,start server");
})