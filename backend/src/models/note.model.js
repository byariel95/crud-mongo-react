const {Schema, model} = require('mongoose');

const noteSchema = new Schema({

    title: {type: String, required: true},
    content: {type: String},
    author: {type: String},
    date: Date
    },{
        timestamps: true
    });

    module.exports = model('Note', noteSchema);