import joi from "joi"

function authValidator(userData) {

    const registerSchema = joi.object({
        fullName: joi.string().min(3).required().trim(),
        email: joi.string().email().required().lowercase(),
        password: joi.string().required().min(8),
    })

    const loginSchema = joi.object({
        email: joi.string().email().required().lowercase(),
        password: joi.string().required().min(8),
    })

    return { register: registerSchema.validate(userData), login: loginSchema.validate(userData) }
}

export default authValidator;