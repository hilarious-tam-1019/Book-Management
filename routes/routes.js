const express = require('express')
const router = express.Router()
const books = require('../controllers/books')

//getting index view
router.get('/', books.homeView)

//create books
router.get('/create', (req,res) => {
     res.render('create', {title: 'Create Books'})
})
router.post('/create', books.createNewBook)

//updating books
router.get('/update/:id',(req,res) => {
     const id = req.params.id
     res.render('update', {title: 'Update Books', id: id})
})
router.post('/update/:id', books.updateBook)

//deleting books
router.post('/delete/:id', books.deleteBook)

module.exports = router