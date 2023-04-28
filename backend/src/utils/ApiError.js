const {StatusCodes} = require('http-status-codes');
class ApiError {
    // errors list parameter is for the error list coming from express validator
    constructor(code,message,errors=[]){
        this.statusCode = code;
        this.message = message;
        this.errors = errors;
    }

    // creating static functions for frequently used type of errors 
    static internal(message,errors=[]) {
        return new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, message,errors);
    }

    // throw ApiError.badRequest("message");
    static badRequest(message,errors=[]) {
        return new ApiError(StatusCodes.BAD_REQUEST, message,errors);
    }

    static unAuthorized(message,errors=[]) {
        return new ApiError(StatusCodes.UNAUTHORIZED, message,errors);
    }

    static notFound(message,errors=[]) {
        return new ApiError(StatusCodes.NOT_FOUND, message,errors);
    }

    static sessionExpired(message,errors=[]) {
        return new ApiError(440, message,errors);
    }
}

module.exports = ApiError;