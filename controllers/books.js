const bookSchema = require('../model/bookSchema')
const dataValidation = require('../model/dataValidation')
const jjv = require('jjv')
const env = jjv()

//render database
exports.homeView = (req,res) => {
    if(req.session.role == 'admin')
    {
        bookSchema.find()
    .then((result) => {
        res.render('index', {title: 'Home' ,books: result})
    })
    .catch((err)=> {
        console.log(err)
    }) }
    else if (req.session.role=='user') 
    {
        bookSchema.find({category: 'Drama'})
    .then((result) => {
        res.render('index', {title: 'Home' ,books: result})
    })
    .catch((err)=> {
        console.log(err)
    })
}}

//create new book in database
exports.createNewBook = function (req,res) {
    env.addSchema('book', dataValidation)
    const errors = env.validate('book', req.body)
    if(!errors)
    {   
        const book = new bookSchema(req.body)

        book.save()
        .then ((result) => {
        res.redirect('/')
    })
        .catch ((err) => {
            console.log(err)
    })} 
    else {
        res.status(400).send('Failed with error object ' + JSON.stringify(errors))
    }
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

// search existing book in database
exports.searchBook = function (req,res) {

    if(req.session.role=='admin') {
        bookSchema.find({
            $or: [
            { title: req.query.title},
            { author: req.query.author},
            { category: req.query.category},
            { vote: req.query.vote}
            ]
        })
        .then((result)=> {
            console.log(result)
            res.render('index', {title: 'Home', books: result})
        })
        .catch((err)=>{
            res.redirect(err)
        })
    } 

    if(req.session.role =='user') {
        bookSchema.find({
            category: 'Drama',
            $or: [
            { title: req.query.title},
            { author: req.query.author},            
            { vote: req.query.vote}
            ]
        })
        .then((result)=> {
            console.log(result)
            res.render('index', {title: 'Home', books: result})
        })
        .catch((err)=>{
            res.redirect(err)
        })
    }
}
    



