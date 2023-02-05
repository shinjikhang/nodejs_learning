const userRoute = require('./users');
const siteRoute = require('./site');

function route(app) {
    app.use('/users', userRoute);
    app.use('/', siteRoute);
}

var arr = ['a', 'a', 'c'];

  module.exports = route;
