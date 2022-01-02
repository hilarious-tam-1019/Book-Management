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




