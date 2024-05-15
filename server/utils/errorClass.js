class CustomError extends Error {
  constructor(message, statusCode) {
    super(message); // Call the super constructor (Error class constructor)

    this.name = this.constructor.name; // Set the name of the error class
    this.statusCode = statusCode || 500; // Set the status code (default to 500 if not provided)
    this.status = `${this.statusCode}`.startsWith("4") ? "fail" : "error"; // Determine the status based on status code
    this.isOperational = true; // Indicates if the error is operational (i.e., expected behavior)

    Error.captureStackTrace(this, this.constructor); // Capture the stack trace
  }
}

// Usage example:
// Throw a custom error
// throw new CustomError('Custom error message', 404);

module.exports = CustomError; // Export the custom error class for use in other files
