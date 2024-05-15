// Error handling middleware function
function errorHandler(err, req, res, next) {
    // Default status code
    let statusCode = err.statusCode || 500;
  
    // Default error message
    let message = err.message || "Internal Server Error";
  
    // Set the status code and send the error response
    res.status(statusCode).json({
      status: "error",
      statusCode,
      message,
    });
  }
  
  // Usage: Register the error-handling middleware function
  module.exports = errorHandler;
  