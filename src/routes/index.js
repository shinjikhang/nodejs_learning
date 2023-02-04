const userRoute = require('./users');

function route(app) {
  app.use('/users', userRoute);
}


module.exports = route;