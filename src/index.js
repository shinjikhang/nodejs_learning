const express = require('express')
const morgan = require('morgan')
const handlebars = require("handlebars");
const app = express()
const port = 3000

// setup the logger
app.use(morgan('combined'))

app.get('/', function (req, res) {
  res.send('hello, world!')
})

//template engine
app.engine('handlebars', handlebars());
//use handlebars
app.set('view engine', 'handlebars');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
