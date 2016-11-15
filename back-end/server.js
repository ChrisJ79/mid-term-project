
//server

//create variables for node modules
var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');
    Routes = require('./routes'),
    PORT = process.env.PORT || 3000;

var app = express();


//routes
// How do I know whether to include my routes on server.js or routes.js??
Routes(app);


// mdiddleware
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser.urlencoded({ extended: true }));
app.use(cookieParser.json());

app.get('/', function(req, res) {
    res.sendFile("index.html", { root: './mid-term-project/public' });
});

app.listen(PORT, () => {
    console.log('Server is running on PORT:', PORT);
});






res.send('A response has been sent!!!');

// what about sessions??

// connect to mongoose to mongo db
// mongoose.connect (mongod://localhost/?????);
