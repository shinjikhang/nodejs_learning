const express = require('express');
const router = express.Router();

const userController = require('../app/Controllers/UsersController');
//Index route
router.post('', userController.store)
router.put('', userController.update)
router.use('/:id', userController.show);
router.use('/', userController.index);

module.exports = router;
