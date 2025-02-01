const Usercontroller=require('../../controllers/index');
const express=require('express');
const router=express.Router();
console.log("hii fronm ")
router.post('/login',Usercontroller.create);
module.exports=router;