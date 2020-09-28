const express = require('express');
const fs = require('fs');
const http = require('http');
const server=http.createServer(app);

var app = express();
app.get('/',(req,res)=>
{
  fs.readFile('./db.json',function(err,data)
  {
     res.send(data.toString());
  });
});
server.listen(3000,()=>{console.log("listening");});
