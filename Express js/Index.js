// What is Express js: its a framework of nodejs with the help of express we can create api

const express = require("express"); 

const app = express(); // create an instance of express

const port = 3000;

app.get('/',(req, res) => { //create route for display output.
  res.send("Hello Express Js");
});


app.listen(port,()=>{
console.log(`Ex of expree ${port}`)
});