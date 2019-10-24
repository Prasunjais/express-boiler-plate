// base joi 
const BaseJoi = require('joi');
// joi date extension 
const Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);
// handling the joi response 
const Response = require('../../responses/response');

// generic option
const options = {
  abortEarly: false,
  convert: true,
  allowUnknown: false,
  stripUnknown: true
};

// Options for Array of array
const arrayOptions = {
  abortEarly: false,
  convert: true,
  allowUnknown: true,
  stripUnknown: {
    objects: true
  }
};

// exports validate admin signin 
exports.validateCreateRequest = (req, res, next) => {
  let schema = Joi.object().keys({
    email: Joi.string().trim().label('email').required().max(256),
    password: Joi.string().trim().label('password').required().min(6).max(100),
  });

  schema.validate(req.body, options).then(() => {
    next();
    // if error occured
  }).catch((err) => {
    let error = [];
    err.details.forEach(element => {
      error.push(element.message);
    });

    // returning the response 
    Response.joierrors(req, res, err);
  });
};
