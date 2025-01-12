const createError = require("../utils/error");
const connectDB = require("../utils/connect");
const User = require("../mongoose/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function register(req, res, next) {
    const data = req.body;
    // console.log(data.email);
    if(!data.email || !data.password) {
        return next(createError(400, "Missing fields"));
    }
    await connectDB();
    const alreadyRegistered = await User.findOne({ email: data.email });

    if(alreadyRegistered) {
        return next(createError(400, "User already exists"));
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({...req.body,password: hash});
    await newUser.save();
    res.status(201).json("User created successfully");
}


async function login(req, res, next) {
    const data = req.body;
    if(!data.email || !data.password) {
        return next(createError(400, "Missing fields"));
    }
    await connectDB();
    const user = await User.findOne({ email: data.email });

    if(!user) {
        return next(createError(400, "Invalid Credentials"));
    }

    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
    if(!isPasswordCorrect) {
        return next(createError(400, "Invalid Credentials"));
    }

    const token = jwt.sign({id: user._id}, process.env.JWT);
    console.log(data);
    console.log(token);
    res.cookie("token",token, {
        httpOnly: true,
        secure: process.env.Node_ENV === "production",
    }).status(200).json({
        msg: "User logged in"
    });
}

async function logout(req, res, next) {
    res.clearCookie("token",{
        httpOnly: true,
        secure: process.env.Node_ENV === "production",
    }).status(200).json({
        msg: "logged out successfully"
    });
}

module.exports = {
    register,
    login, 
    logout
}