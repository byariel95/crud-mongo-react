const User = require('../models/user.model');
const userMethods = {};

userMethods.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

module.exports = userMethods;
