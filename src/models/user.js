const moongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Task = require('../models/task')

const userSchema = new moongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error("Age Must be Greater than 0")
            }
        }
    },  
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
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
            if (value.includes("password")) {
                throw new Error("Too Easy to guess")
            }
        }
    },
    tokens: [{
        // TO KEEP TRACK OF ALL PLACES WHERE THE USER IS LOGGED IN
        token: {
            type: String,
            required: true
        }
    }]
},{
    timestamps: true
});

userSchema.virtual('tasks', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'owner'
})

// This method is for only exposing the email, name, and token. 
/// Removes tokens array and hashed password
userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens

    return userObject
}

userSchema.methods.generateAuthToken = async function( ) {
    const user = this;
    const token = jwt.sign({_id: user.id.toString()}, "thisismyfirstNodebackend" );

    user.tokens = user.tokens.concat({ token });

    await user.save();
    return token
};



userSchema.statics.findByCredentials = async (email, password) => {

    const user = await User.findOne({email: email})
    if(!user) {
        throw new Error("Unable to Login")
    }
    const isMatch = await bcrypt.compare( password,user.password )
    if(!isMatch) {
        throw new Error("Unable to Login")
    }
    return user
}


// Hash the plain text password before saving 
userSchema.pre('save', async function (next) {
    const user = this;


    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

// Delete user task when user is removed
userSchema.pre('remove', async function (next) {
    const user = this
    await Task.deleteMany({ owner: user._id})
    next()
})

const User = moongoose.model('User', userSchema)

module.exports = User