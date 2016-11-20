
//server

'use strict';

// 1) Import variables from node modules with 'require' method
var express = require('express');
var path = require('path');
    // var morgan = require('morgan');
    // bodyParser = require('body-parser');
    // cookieParser = require('cookie-parser');
    // Routes = require('./routes');
    // PORT = process.env.PORT || 3000;*******
    // app.get('/', function(request, response) {
    //     response.send("I'm working!");
    // });




// 2) Create an 'instance' that will be used to set up Middleware
var app = express();

// 3) Define the port to run on
app.set('port', 3000);

// 5) Configure Express to serve the static files the 'Public' directory, which inclues index.html.
app.use(express.static(path.join(__dirname, 'public')));

// 4) Configure the app to listen on Port 3000
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('You gettin served on ' + port);
});
// app.listen(PORT, () => {
//     console.log('Server is running on PORT:', PORT);
// });
// or...
// app.listen(3000);


// MIDDLEWARE

// app.use(morgan('dev'));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(cookieParser.urlencoded({ extended: true }));
// app.use(cookieParser.json());

// app.get('/', function(req, res) {
//     res.sendFile("index.html", { root: './mid-term-project/public' });
// });

//Routes
// How do I know whether to include my routes on server.js or routes.js??
// Routes(app);


// Is this all I need to get a response??
// res.send('A response has been sent!!!');



// what about sessions??

// connect to mongoose to mongo db
// mongoose.connect (mongod://localhost/?????);
