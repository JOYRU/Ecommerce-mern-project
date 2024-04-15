const express = require("express") ; 
const app = express() ; 

app.get('/test',(req,res) =>{
    res.status(200).send({ message: 'api ddff testing is working fine'}) ; 
}) ; 

app.get('/products',(req,res)=>{
    res.status(200).send({ message: 'products are returned'}) ; 
}) ; 

app.listen(3000,()=>{
   console.log("Server is running") ; 
}) ;

//change