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


userMethods.createUsers = async (req, res) => {
    try {
        const { username,name,lastname } = req.body;
        const newUser = new User({ username,name,lastname });
        await newUser.save();
        res.json('User created');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

userMethods.deleteUser = async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json('User deleted');
}



module.exports = userMethods;
