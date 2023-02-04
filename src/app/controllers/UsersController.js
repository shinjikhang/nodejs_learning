class UsersController {


  //[GET] /users
  index(req, res) {
    res.render('users');
  }

  //[GET] /users/:slug
  show(req, res) {
    res.send('aaa');
  }

  //insert


}

module.exports = new UsersController();