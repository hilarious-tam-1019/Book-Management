const Redis = require('redis')

const redisClient = Redis.createClient()


const createNewBook = (req,res) => {
    const book = req.body
    redisClient.set('book', book)
    
}