const express = require('express')
const router = express.Router()
const homeView = require('../controllers/homeController')
const createNewBook = require('../controllers/createNewBook')

router.get('/', homeView)

router.post('/create-book', async (req,res) => {
    const {title,author,date,category,vote} =req.body
})

 


module.exports = router