const userSchema = require('../model/userSchema')
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')



//user login
exports.userLogin = async (req,res) => {
    const { email, password} = req.body;

    const user = await userSchema.findOne({ email }).lean();
    
    if(!user) {
  
        return res.json ({status:'error', error:'Invalid email/password'})
    }
    if(await bcrypt.compare(password, user.password)) {
        // email, password combination is succesful
        req.session.userId = user._id
        req.session.role = user.role
        return res.json ({status:'ok', user: req.session.userId})
    }
    res.json({ status: 'error', error: 'Invalid username/password' })
}

//user sign up
exports.userSignup = async (req,res) => {
    const { email, password: plainTextPassword } = req.body;

    if(!email || typeof email !== 'string') {
        return res.json({ status: 'error', error: 'Invalid email'});
    }

    if(!plainTextPassword || typeof plainTextPassword !== 'string') {
        return res.json({ status: 'error', error: 'Invalid password'});
    }

    if(plainTextPassword.length < 5) {
        return res.json({status: 'error', error: 'Password too small, should at least be 6 characters'});
    }

    const password = await bcrypt.hash(plainTextPassword, 10);

    try {
        const response = await userSchema.create({
            email,
            password
        },
    )
        req.session.userId = response._id
        req.session.role = response.role

        console.log ('User created succesfully: ', response);


    } catch (error) {
        if(error.name==='ValidationError') {
            return res.json({ status:'error', error: 'Invalid Email'})
        }

        if(error.code === 11000) {
            //duplicate key
            return res.json ({ status: 'error', error: 'Email already in use'});
        }
        throw error 
    }
    res.json({status: 'ok'})
}


//user log out
exports.userLogout = (req, res) => {
    req.session.destroy(err =>{
        if(err) {
            return res.redirect('/')
        }
        res.redirect('/login')
    })
}