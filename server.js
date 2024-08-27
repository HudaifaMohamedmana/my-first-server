const express = require("express");
// -------> this import our npm package names express
const app = express()


app.get('/',(req,res)=>{
    res.send('i am data, that is reqosted from the root')
})
// ---> [get -----------> root]


app.get('/home',(req,res)=>{
    res.send('i am data, that is reqosted from the home')
})
// ---> [get -----------> root]
app.get('/about',(req,res)=>{
    res.send('i am data, that is reqosted from the about')
})
// ---> [get -----------> root]
app.listen('3000',()=>{
    console.log('Server is now running')
})