const User = require('../models/User')
class UsersController {
    //[GET] /users
    index(req, res, next) {
        User.find({})
            .then(users => res.json({
                users: users
            }))
            .catch(next);
    }

    //[GET] /users/:slug
    show(req, res) {
        const user_id = req.params.id;
        if (user_id) {
            // using callback
            User.findById(user_id, function (err, user) {
                if (!user) {
                    return res.status(404).json({ message: 'User not found' });
                } else {
                    return res.status(200).json(user)
                }
            });
        }
    }

    //insert
    store(req, res, next) {
        const params = req.body;
        const course = new User(params);
        course.save()
            .then(() => res.json({ status: 'Success' }))
            .catch((err => res.status(400).json(err)))
    }


    //update
    update(req, res, next) {
        res.json('update');

    }
}

module.exports = new UsersController();
