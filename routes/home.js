const express = require('express')
const router = express.Router()
const homeView = require('../controllers/homeController')
const createNewBook = require('../controllers/createNewBook')

router.get('/', homeView)

 


module.exports = router