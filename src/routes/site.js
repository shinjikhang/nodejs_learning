const express = require('express');
const router = express.Router()

const siteController = require('../app/Controllers/SiteController');
//Index route
router.use('/search', siteController.search)
router.use('/', siteController.index)

module.exports = router;