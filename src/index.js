const express=require('express');
const {PORT}=require('./config/serverconfig');
const app=express();
const bodyparser=require('body-parser');

const apiRoutes=require('./routes/index');
const setupAndstartServer=async ()=>{
    app.use(bodyparser.urlencoded({extended:true}));
    app.use(bodyparser.json());
    app.use('/api',apiRoutes);
    app.listen(PORT,async ()=>{
        console.log(`port started at ${PORT}`)
    })
}
setupAndstartServer();