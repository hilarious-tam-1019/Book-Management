const { AccessControl } = require('accesscontrol')
const bookSchema = require('../model/bookSchema')


//render database
exports.homeView = (req,res) => {
    bookSchema.find()
    .then((result) => {
        res.render('index', {title: 'Home' ,books: result})
    })
    .catch((err)=> {
        console.log(err)
    })
}

//create new book in database
exports.createNewBook = function (req,res) {
    const book = new bookSchema(req.body)
    book.save()
    .then ((result) => {
        res.redirect('/')
    })
    .catch ((err) => {
        console.log(err)
    })
}

//update existing book in database
exports.updateBook = function (req,res) {
    const id = req.params.id
    const book = new bookSchema(req.body)
    bookSchema.findByIdAndUpdate(id, {title: book.title, author: book.author, date: book.date, category:book.category, vote: book.vote})
    .then ((result) => {
        res.redirect('/')
    })
    .catch((err)=> {
        res.redirect(err)
    })
}

//delete existing book in database 
exports.deleteBook = function (req,res) {
    const id = req.params.id
    bookSchema.findByIdAndDelete(id)
    .then((result) => {
        res.redirect('/')
    })
    .catch ((err) => {
        console.log(err)
    })
}





