const express=require('express');
const {PORT}=require('./config/serverconfig');
const app=express();
const bodyparser=require('body-parser');

const setupAndstartServer=async ()=>{
    app.use(bodyparser.urlencoded({extended:true}));
    app.use(bodyparser.json());
    app.get('/login',(req,res)=>{
        const result=req.body.Name;
        res.send(`Hello ${result}`);
    })
    app.listen(PORT,()=>{
        console.log(`port started at ${PORT}`)
    })
}
setupAndstartServer();