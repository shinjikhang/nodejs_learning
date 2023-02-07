const User = require('../models/User')
class UsersController {
    //[GET] /users
    index(req, res, next) {
        User.find({})
            .then(users => res.json({
                users: users
            }))
            .catch(error => next(error));
    }

    //[GET] /users/:slug
    show(req, res) {
        const userId = req.params.id;
        // using callback
        User.findById(userId, function (err, user) {
            if (err) {
                res.status(500).json({ message: err });
            } else {
                if (!user) {
                    return res.status(404).json({ message: 'User not found' });
                } else {
                    return res.status(200).json(user)
                }
            }
        });
    }

    //insert
}

module.exports = new UsersController();
