const jwt = require("jsonwebtoken");
const createError = require("./error");

const verifyToken = (req, res, next) => {

    const token = req.cookies?.token;
    // console.log(token);

    if(!token) {
        return next(createError(401, "Not Authenticated"));
    }
    jwt.verify(token, process.env.JWT, (err, user) => {
        if(err) {
            return next(createError(403, "Token is not valid"));
        }
        req.user = user;
        next();
    });
};

module.exports = verifyToken;