const mongoose = require('mongoose');

const bookSchema = mongoose.Schema ({
    title: {type: String, required: true, unique: true},
    author: {type: String, required: true},
    date: {type: Number, required: true},
    category: {type: String, required: true},
    vote: {type: Number, required: true}
},
{
    collection: 'Books'
})

const model = mongoose.model('Books', bookSchema);

module.exports = model;

