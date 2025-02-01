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

}
module.exports={
    UserRepository
}

