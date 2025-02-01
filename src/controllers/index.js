
const { UserService } = require("../services/index");
const userservice = new UserService();
const create = async (req, res) => {
    try {
        const user = await userservice.create({
            email: req.body.email,
            password: req.body.password
        });
        return res.status(201).json({
            data: user
        })
    } catch (error) {
        console.log("error in controller");

    }
}
const singin = async (req, res) => {
    try {

        const token = await userservice.signin({
            email: req.body.email,
            password: req.body.password
        });
        return res.status(201).json({
            data: token
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Something went wrong",
            success: false,
            err: error
        });

    }
}
const isAuthenticated = async (req, res) => {
    try {
        const token = req.headers['x-access-token'];
        const response = await userservice.isAuthenticated(token);
        return res.status(200).json({
            message: "user is authenticated and token is valid",
            success: true,
            data: response,
            err: {},

        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Something went wrong",
            success: false,
            err: error
        });
    }
}
module.exports = {
    create, singin, isAuthenticated
}