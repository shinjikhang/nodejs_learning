const path = require('path');
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars');
const { send } = require('process');
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));

// setup the logger
app.use(morgan('combined'))


app.engine('hbs', engine({
  extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/tin-tuc', (req, res) => {
  res.render('tin-tuc');
});


//Route parameters
app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
