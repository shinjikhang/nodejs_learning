const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const { send } = require('process');
const route = require('./routes');
const db = require('./config/db');
const app = express();
const port = 3000;


//Connect DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
); //form-param (dung de bat param trong form)
app.use(express.json()); //raw json

// -- LOGGER
app.use(morgan('combined'));

//Handlebar engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');

//set view handlebar
app.set('views', path.join(__dirname, 'resources/views'));

//Route init(default get function index)
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
