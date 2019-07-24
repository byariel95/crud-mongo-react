const mongoose = require('mongoose');

const URL = process.env.MONGOOSE_URL ? process.env.MONGOOSE_URL: process.env.MONGOOSE_URLTEST;

mongoose.connect(URL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});
 
const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('database is connected');
});