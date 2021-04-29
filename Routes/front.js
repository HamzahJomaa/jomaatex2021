const express = require('express');
const router = express.Router();
const SignController = require('../Controllers/AuthController')
const IndexController = require('../Controllers/IndexController')


router.get("/",IndexController.Index)


module.exports = router;

