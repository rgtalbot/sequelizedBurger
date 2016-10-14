var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

//serve static content for the app from the public directory
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({
    extended: false
}));
//override POST with ?_method=
app.use(methodOverride("_method"));
var expressHandlebars = require('express-handlebars');
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//ROUTES
var routes = require('./controllers/burgers_controller');
app.use('/', routes);

var PORT = process.env.PORT || '3000';

//LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});