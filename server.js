const express = require('express')
const { render } = require('ejs')
const routes = require('./routes/home')
const { urlencoded } = require('body-parser')
const redis = require('redis')
const { Result } = require('express-validator')




//connecting to redis
const client = redis.createClient(6379, '127.0.0.1')

client.on('connect', function() {
    console.log('Connected!')
})

//express app
const app = express()


//register view engine
app.set('view engine','ejs')



//server setup

app.listen(3000, () => {
    console.log('server connected')
})




//parsing data & static files
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('views'))



//routes
app.use(routes)
