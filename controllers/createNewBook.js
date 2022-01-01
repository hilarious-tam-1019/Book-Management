// const Redis = require('ioredis');
// const JSONCache = require('redis-json')

// const redis = new Redis()
// const jsonCache = new JSONCache(redis)



const createNewBook = async function (req,res) {
    const {title, author, date, category, vote} = req.body

        // await jsonCache.set('book', req.body)
        // const result = await jsonCache.get('book')
        // console.log(result)
}

module.exports = createNewBook

