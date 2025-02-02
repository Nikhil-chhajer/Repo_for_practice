
const { UserRepository } = require('../repository/index');
const jwt = require('jsonwebtoken');
const {SECRET_KEY}=require('../config/serverconfig')
const bcrypt = require('bcrypt');
class UserService {
    constructor() {
        this.userepository = new UserRepository();
    }
    async create(data) {
        try {
            const user = await this.userepository.create(data);
            return user;
        } catch (error) {
            console.log("error in service");
        }
    }
    async signin(data) {
        try {
           
            const user = await this.userepository.findbyemail(data);
            if (!user) {
                console.log("email doesnt match");
                throw { error: "email not found" };
            }
            const response=await this.checkpassword(data.password,user.password);
            if(!response){
                console.log("pass doesnt match");
                throw { error: "pass not found" };
            }
            const token =await this.createtoken({email:data.email,id:user.id});
            return token;
            
        } catch (error) {
            console.log("error in service");
            throw error
        }
    }
    async isAuthenticated(token){
        try {
            const response=await this.verifytoken(token);
            if (!response) {
                throw { error: "Invalid token" };

            }
            const user =await this.userepository.getById(response.id);
            if (!user) {
                throw { error: "No User with corresponding token" };

            }
            return user.id;
        } catch (error) {
            console.log("Something went wrong in auth process");
            throw error;

        }
    }
    verifytoken(token){
        try {
            const result=jwt.verify(token,SECRET_KEY);
            return result;
            
        } catch (error) {
            console.log("Something went wrong in token validation");
            throw error;
        }

    }
    createtoken(user) {
      
        try {
            const result = jwt.sign(user, SECRET_KEY, { expiresIn: '1d' });
            return result;

        } catch (error) {
            console.log("Something went wrong in token creation");
            throw error;

        }
    }
    checkpassword(plainpassword,hashedpassword){
        try {
            const result=bcrypt.compareSync(plainpassword,hashedpassword);
            return result;
        } catch (error) {
            console.log("Something went wrong in token creation");
            throw error;
            
        }
    }
}

module.exports = {
    UserService
}