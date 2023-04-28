const {
  hostRegistrationSchema,
  hostLoginSchema,
  hostIdValidator,
  hostUpdateSchema,
  passwordValidator
} = require("./hostRoutesSchema");


const { param } = require('express-validator');

const idValidator = param('id',"Please enter a valid user id.").isLength({min: 24}).isHexadecimal();


module.exports = {
  hostRegistrationSchema,
  hostLoginSchema,
  hostIdValidator,
  hostUpdateSchema,
  passwordValidator,
  idValidator
};
