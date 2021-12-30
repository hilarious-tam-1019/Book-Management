const Redis = require('redis');
const { post } = require('../routes/home');
const client = Redis.createClient(6379)

//log error to the console if any occurs
client.on("error", (err) => {
    console.log(err);
})

