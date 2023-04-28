const { ApiError } = require("../utils");


const errorHandler = (err,req,res,next)=> {
    console.log(err);   // use async logger in production since console.log is synchronous

    // custom error thrown by developer.
    if(err instanceof ApiError){
        res.status(err.statusCode).json({error:err.message})
        return;
    }

    // unexpected Error
    res.status(500).json({error: "Something went wrong while processing your request."});
}

module.exports = errorHandler;