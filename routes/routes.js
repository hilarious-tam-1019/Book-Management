const express = require('express')
const router = express.Router()
const books = require('../controllers/books')

router.get('/', books.homeView)

router.get('/create', (req,res) => {
     res.render('create', {title: 'Create Books'})
})

router.post('/create', books.createNewBook)


module.exports = router