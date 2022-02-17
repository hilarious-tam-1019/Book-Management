const express = require('express')
const router = express.Router()
const books = require('../controllers/books')
const authentication = require('../controllers/authentication')
const middlewares = require('../middlewares/middlewares')

//local host route
router.get('/', middlewares.redirectLogin, middlewares.redirectHome)

//getting index view
router.get('/home', middlewares.redirectLogin, books.getBookCacheAdmin,books.getBookCacheUser, books.unidentifiedUser)

//create books
router.get('/create',middlewares.redirectLogin,middlewares.roleAuth('createAny','book'), (req,res) => {
     res.render('create', {title: 'Create Books'})
})
router.post('/create',middlewares.redirectLogin, middlewares.roleAuth('createAny','book'), books.createNewBook)

//updating books
router.get('/update/:id',middlewares.redirectLogin,middlewares.roleAuth('updateOwn','book'), (req,res) => {
     const id = req.params.id
     res.render('update', {title: 'Update Books', id: id})
})
router.post('/update/:id', books.updateBook)

//deleting books
router.post('/delete/:id',middlewares.redirectLogin, middlewares.roleAuth('deleteAny','book'), books.deleteBook)

//book search
router.get('/search',middlewares.redirectLogin, books.searchBook)

//user login
router.get('/login',middlewares.redirectHome, (req,res) => {
     res.render('login', {title:'Log In'})
})
router.post('/login', authentication.userLogin)

//user sign in 
router.get('/signup',middlewares.redirectHome, (req,res) => {
     res.render('signup', {title: 'Sign Up'})
})
router.post('/signup', authentication.userSignup)

//user log out
router.post('/logout', authentication.userLogout)

//user page


//email confirmation
// router.get('/confirmation/:session', )



module.exports = router