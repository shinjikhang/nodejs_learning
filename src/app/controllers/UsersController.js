const User = require('../models/User')
class UsersController {
    //[GET] /users
    index(req, res, next) {
        // User.find({}, function (err, docs) {
        //     if (err) {
        //         return res.send(docs);
        //     }
        //     next(err);
        //     res.status(400).json({ error: 'message' })
        // });

        User.find({})
            .then(user => res.json(user))
            .catch(error => next(error));

    }

    //[GET] /users/:slug
    show(req, res) {
        res.render("user-show");
    }

    //insert
}

module.exports = new UsersController();
