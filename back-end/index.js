
//server

'use strict';

//Import variables from node modules with 'requite; method'
var express = require('express'),
    // morgan = require('morgan'),
    // bodyParser = require('body-parser'),
    // cookieParser = require('cookie-parser'),
    // Routes = require('./routes'),
    PORT = process.env.PORT || 3000;

// Create an 'instance' that will be used to set up Middleware
var app = express();





//routes
// How do I know whether to include my routes on server.js or routes.js??
// Routes(app);


// mdiddleware
// app.use(express.static('public'));
// app.use(morgan('dev'));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(cookieParser.urlencoded({ extended: true }));
// app.use(cookieParser.json());
//
// app.get('/', function(req, res) {
//     res.sendFile("index.html", { root: './mid-term-project/public' });
// });

// configure the app to listen on Port 3000
app.listen(PORT, () => {
    console.log('Server is running on PORT:', PORT);
});


// Is this all I need to get a response??
// res.send('A response has been sent!!!');



// what about sessions??

// connect to mongoose to mongo db
// mongoose.connect (mongod://localhost/?????);
