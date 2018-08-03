let express = require('express');

let consign = require('consign');

let bodyParser = require('body-parser');

let expressValidator = require('express-validator');

let app = express();

app.set('view engine', 'ejs');
app.set('views','./app/views'); // ambos os nomes tem que ser iguas

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator());

consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;

