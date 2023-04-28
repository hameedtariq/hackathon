require("express-async-errors");
const jwt = require('jsonwebtoken');
const { ApiError } = require("../utils");
require('dotenv').config();

const authMiddleware = async(req, res, next)=>{

    const token = req.cookies.token;
    // console.log(req.cookies);
    if(token){
        // TODO: Handle fake token error
        // TODO: Consider role based access
        try {
            const {id,isAdmin} = jwt.verify(token, process.env.SECRET_KEY);
            req.user = {id,isAdmin:true};
            next();
            return;
        }catch(e) {
            res.clearCookie("token");
            throw ApiError.sessionExpired("Session Expired");
        }        
    }
    else {
        throw ApiError.unAuthorized("Warning! No token found, Unauthorized Access");
    }
}

module.exports = authMiddleware;