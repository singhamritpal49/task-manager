const moongoose = require('mongoose')
const validator = require('validator')


const User = moongoose.model('User', {
    name: { 
        type: String,
        required: true,
        trim: true
    },
    age: { 
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) {
                throw new Error("Age Must be Greater than 0")
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is Invalid")
            }
        }

    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        validate(value) {
            if(value.includes("password")) {
                throw new Error("Too Easy to guess")
            }
        }
    }
})

module.exports = User