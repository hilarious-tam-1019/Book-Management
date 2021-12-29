const express = require('express')
const { render } = require('ejs')
const routes = require('./routes/home')
const { urlencoded } = require('body-parser')
const redis = require('redis')
const { Result } = require('express-validator')
const client = redis.createClient()



//express app
const app = express()


//register view engine
app.set('view engine','ejs')



// //server setup
// client.on('connected', function() {
//     console.log('redis connected')
// })
app.listen(3000, () => {
    console.log('server connected')
})

//parsing data & static files
app.use(express.json())
app.use(urlencoded({extended: true}))
app.use(express.static('views'))


//routes
app.use(routes)