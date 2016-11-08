
//server

//create variables for node modules
var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');
    mongoose = require('mongoose'),
    Routes = require('./routes'),
    PORT = process.env.PORT || 3000;

//sessions??

// connect to mongoose to mongo db
// mongoose.connect (mongod://localhost/?????);

//middleware
app.use(morgan('dev'));
app.use('express.static('public')');
app.use(bodyParser.urlencoded({ extended:true }), bodyParser.json());
//(do i need this?)app.use(cookieParser.urlencoded({ extended:true }), bodyParser.json());


//routes
Routes(app);

app.listen(PORT, () => {
    console.log('Server is running on PORT:', PORT);
});
