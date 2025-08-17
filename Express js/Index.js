// What is Express js: its a framework of nodejs with the help of express we can create api


const express = require("express");

const app = express();
const port = 3000;

app.get('/',(req,res)=>{
res.send("Hello World")
});

app.listen(port,()=>{
    console.log(`Example app running ${port}`);
})
