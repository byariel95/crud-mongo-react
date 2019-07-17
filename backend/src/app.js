const express  = require('express');
const cors = require('cors');


const app = express();

// settings 
app.set('port',process.env.PORT || 4000);

// middlewares
app.use(cors());
app.use(express.json());

// routes 
//pp.use('/api/notes', require('./routes/note.route'));
app.use('/api/users', require('./routes/user.route'));


module.exports = app;