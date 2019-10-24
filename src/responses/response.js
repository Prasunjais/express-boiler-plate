const responseStatus = require('../facades/response');
const messageTypes = require('../responses/types');

// response class 
class Response {
  // triggering a success response 
  success(req, res, status, data = null, message = 'success') {
    if (status == responseStatus.HTTP_OK) {
      req.appLogger.info(`URL : ${req.protocol}://${req.get('host')}${req.originalUrl} | Request : ${JSON.stringify(req.value?req.value:{})} | Response :  ${JSON.stringify(data)}`)
    } else {
      req.appLogger.error(`URL : ${req.protocol}://${req.get('host')}${req.originalUrl} | Request : ${JSON.stringify(req.value?req.value:{})} | Error : ${message}`)
    }

    return res.status(status).json({
      status,
      message,
      data
    });
  }
  // triggering a error response 
  errors(req, res, status, message) {
    req.appLogger.error(`URL : ${req.protocol}://${req.get('host')}${req.originalUrl} | Request : ${JSON.stringify(req.value?req.value:{})} | Error : ${message}`)

    return res.status(status).json({
      status,
      message
    });
  }
  // triggering a joi error response  
  joierrors(req, res, err) {
    // console.log(err)
    let error = err.details.reduce((prev, curr) => {
      prev[curr.path[0]] = curr.message.replace(/"/g, '');
      return prev;
    }, {});
    let message = messageTypes.joiValidation.badRequest;
    let status = responseStatus.HTTP_BAD_REQUEST;
    req.appLogger.error(`URL : ${req.protocol}://${req.get('host')}${req.originalUrl} | Request : ${JSON.stringify(req.value?req.value:{})} | BadRequestError : ${JSON.stringify(error)}`)

    return res.status(status).json({
      status,
      message,
      error
    });
  }
}

// exporting the module 
module.exports = new Response();
