const Usercontroller=require('../../controllers/index');
const express=require('express');
const router=express.Router();

router.post('/signup',Usercontroller.create);
router.post('/signin',Usercontroller.singin);
router.get('/isAuthenticated',Usercontroller.isAuthenticated);
module.exports=router;