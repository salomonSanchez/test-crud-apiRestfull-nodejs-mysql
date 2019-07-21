var express = require('express');
var app = express();

var port = process.env.PORT || 8042;
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser()); // get information from html forms
//view engine setup
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'presentacion'));
app.set('view engine', 'ejs'); // set up ejs for templating

// routes ======================================================================
require('./negocio/routes')(app); // load our routes and pass in our app and fully configured passport

//launch ======================================================================
app.listen(port);
console.log('http://localhost:8042/ ');

//catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(500).render('404', {title: "Sorry, page not found"});
});
exports = module.exports = app;
