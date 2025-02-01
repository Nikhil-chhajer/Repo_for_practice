const {User}=require('../models/index');
class UserRepository{
    async create(data){
        try {
            console.log(data)
            const user=await User.create(data);
          
            return user;
        } catch (error) {
            console.error("Error in UserRepository.create:", error);
            throw new Error("User creation failed");   
        }
    }
    async findbyemail(data){
        try {
            const user=await User.findOne({
                where:{
                    email:data.email
                }
            });
            return user;
        } catch (error) {
            console.error("no user with such email:", error);
            throw new Error("Email not found"); 
        }
    }
    async getById(userId){
        try {
            const user=await User.findByPk(userId,{
                attributes:['email','id']

         });
         
         return  user;
        } catch (error) {
            console.error("no user with such id:", error);
            throw new Error("user not found"); 
        }
    }

}
module.exports={
    UserRepository
}

