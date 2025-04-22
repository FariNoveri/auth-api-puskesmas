// Format Response Success
const successResponse = (res, message, data = null) => {
    return res.json({
      status: 'success',
      message: message,
      data: data,
    });
  };
  
  // Format Response Error
  const errorResponse = (res, message, data = null, statusCode = 500) => {
    return res.status(statusCode).json({
      status: 'error',
      message: message,
      data: data,
    });
  };
  
  module.exports = {
    successResponse,
    errorResponse,
  };
  