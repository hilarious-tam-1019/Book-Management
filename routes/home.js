const express = require('express')
const router = express.Router()
const homeView = require('../controllers/homeController')
const createNewBook = require('../controllers/createNewBook')

router.get('/', homeView)

router.get('/create', (req,res) => {
     res.render('create')
})

router.post('/create', createNewBook)


module.exports = router