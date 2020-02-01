const jwt = require('jsonwebtoken')
const User = require('../models/user')



const auth = async (req, res, next) => {
    try {
        // Middleware First starts by looking at the header that user provides
        const token = req.header('Authorization').replace('Bearer ', '');
        // then it verifies it by decoding
        const decoded = jwt.verify(token, "thisismyfirstNodebackend");
        // we use User.findOne to lookup user
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

        // If the user is not found throw error
        if (!user) {
            throw new Error()
        }
        // This is for logout feature
        req.token = token

        // if user is found // letting the route handler to run
        req.user = user;
        next()
    } catch (e) {
        // If they are not Authenticator
        res.status(401).send({ error: "Please Authenticate" })
    }
};
module.exports = auth;