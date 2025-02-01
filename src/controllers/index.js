
const {UserService}=require("../services/index");
const userservice=new UserService();
const create=async(req,res)=>{
    try {
        console.log("hii")
        const user=await userservice.create({
            email:req.body.email,
            password:req.body.password
        });
        return res.status(201).json({
            data:user
        })
    } catch (error) {
        console.log("error in controller");
        
    }
}
module.exports={
    create
}