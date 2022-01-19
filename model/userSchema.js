const mongoose = require('mongoose');
const isEmail = require('validator/lib/isEmail');

const UserSchema = mongoose.Schema ({
    email: {type: String, required: true, unique: true, validate: [isEmail]},
    password: {type: String, required: true},
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin']
    }
},
{
    collection: 'users'
})

const model = mongoose.model('users', UserSchema);

module.exports = model;