const bcrypt = require('bcrypt');
const dotenv=require('dotenv');
const SALTROUNDS=process.env.SALTROUNDS
dotenv.config();
module.exports={
    PORT:process.env.PORT,
    SALT:bcrypt.genSaltSync(SALTROUNDS),
    SECRET_KEY:process.env.SECRET_KEY
}