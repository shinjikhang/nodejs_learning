const User = require('../models/User')
class UsersController {
    //[GET] /users
    index(req, res) {
        User.find({}, function (err, docs) {
            if (err) {
                return res.send(docs);
            }
            res.status(400).json({ error: 'message' })
        });
    }

    //[GET] /users/:slug
    show(req, res) {
        res.render("user-show");
    }

    //insert
}

module.exports = new UsersController();
