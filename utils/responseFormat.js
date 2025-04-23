// utils/response.js

// Format respons sukses
const successResponse = (res, message, data = null) => {
  return res.status(200).json({
    status: 'success',
    message,
    data,
  });
};

// Format respons error
const errorResponse = (res, message, data = null) => {
  return res.status(500).json({
    status: 'error',
    message,
    data,
  });
};

module.exports = {
  successResponse,
  errorResponse,
};
