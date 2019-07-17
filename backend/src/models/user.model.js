const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    name:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    }
    },
    {
        timestamps: true
    });

    module.exports = model('User', userSchema);