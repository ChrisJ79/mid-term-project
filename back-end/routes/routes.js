
//routes

'use strict';

//??
var user = require('./controllers/controller.js');

//??
module.exports = (app) => {
    app.get('/', controller.index);

};
