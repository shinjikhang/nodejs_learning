class SiteController {


  //[GET] /
  index(req, res) {
    res.render('home');
  }

  //[GET] /search
  search(req, res) {
    res.render('search');
  }

  //insert


}

module.exports = new SiteController();