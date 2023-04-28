const {body, param} = require("express-validator");

const hostRegistrationSchema = [
    body('email').isEmail().withMessage("Please enter a valid email").normalizeEmail().isLowercase(),
    body('password').isLength({min: 8}).withMessage("Password must be at least 8 characters long").matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/).withMessage("Password must contain at least one uppercase letter, one lowercase letter, and one number or special character"),
    body('firstName').isLength({min: 1}).withMessage("Please enter a first name"),
    body('lastName').isLength({min: 1}).withMessage("Please enter a last name"),
    body('phoneNumber').isLength({min: 10}).withMessage("Please enter a valid phone number"),
    body('address.line1').isLength({min: 1}).withMessage("Please enter an address"),
    body('address.city').isLength({min: 1}).withMessage("Please enter a city"),
    body('address.state').isLength({min: 1}).withMessage("Please enter a state"),
    body('address.zipCode').isLength({min: 5}).withMessage("Please enter a valid zip code").matches(/^\d{5}(?:[-\s]\d{4})?$/).withMessage("Please enter a valid zip code"),
    body('isManager').isIn([true,false,"true","false",0,1,"0","1"]).withMessage("Invalid option for manager provided").toBoolean(),
];

const hostLoginSchema = [
    body('email').isEmail().withMessage("Please enter a valid email.").normalizeEmail().isLowercase(),
    body('password').isLength({min:8}).withMessage("Please enter a valid password."),
]

const hostIdValidator = param('hid',"Please enter a valid host id.").isLength({min: 24}).isHexadecimal();
//TODO: Update Schema. some property checks are missing. Also don't allow to update email.
const hostUpdateSchema = [
    body('email').optional().isEmail().withMessage("Please enter a valid email").normalizeEmail().isLowercase(),
    body('password').optional().isLength({min: 8}).withMessage("Password must be at least 8 characters long").matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/).withMessage("Password must contain at least one uppercase letter, one lowercase letter, and one number or special character"),
    body('firstName').optional().isLength({min: 1}).withMessage("Please enter a first name"),
    body('lastName').optional().isLength({min: 1}).withMessage("Please enter a last name"),
    body('phoneNumber').optional().isLength({min: 10}).withMessage("Please enter a valid phone number"),
    body('address.line1').optional().isLength({min: 1}).withMessage("Please enter an address"),
    body('address.city').optional().isLength({min: 1}).withMessage("Please enter a city"),
    body('address.state').optional().isLength({min: 1}).withMessage("Please enter a state"),
    body('address.zipCode').optional().isLength({min: 5}).withMessage("Please enter a valid zip code").matches(/^\d{5}(?:[-\s]\d{4})?$/).withMessage("Please enter a valid zip code"),
    body('isManager').optional().isIn([true,false,"true","false",0,1,"0","1"]).withMessage("Invalid option for manager provided").toBoolean(),
]

const passwordValidator = body('password').optional().isLength({min: 8}).withMessage("Password must be at least 8 characters long").matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/).withMessage("Password must contain at least one uppercase letter, one lowercase letter, and one number or special character");


module.exports = {hostRegistrationSchema,hostLoginSchema,hostIdValidator,hostUpdateSchema,passwordValidator};