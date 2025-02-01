const { UserRepository } = require('../repository/index');
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
}
module.exports={
    UserService
}