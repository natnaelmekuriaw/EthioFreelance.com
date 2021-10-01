
//Handling Mongoose duplicate key errors
if(err.code === 11000){
const message = `Duplicate ${object.keys(err.keyValue)}entered`
error = new ErrorHandler(message, 400)
}

//Handling wrong JWT error
if(err.name === 'JsonWebTokenError'){
const message = 'JSON Web TOken is invalid. Try Again!!'
error = new ErrorHandler(message, 400)
}

//
if(err.name === 'TokenExpiredError'){
const message = 'JSON Web TOken is expired. Try Again!!'
error = new ErrorHandler(message, 400)
}