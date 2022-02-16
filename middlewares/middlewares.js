const { roles }  = require('./roles')

//redirect to login if the user not log in
exports.redirectLogin = (req,res,next) => {
    // console.log('redirectLogin')
    if (!req.session.userId) {
        res.redirect('/login')

    } else {
        next()
    }
}

//redirect to home if the user has already log in
exports.redirectHome = (req,res,next) => {
    if (req.session.userId) {
        res.redirect('/home')
    } else {
        next()
    }
}

//checking if the account is authorized for the request
exports.roleAuth = function(action, resource) {
 return async (req, res, next) => {
  try {
   const permission = roles.can(req.session.role)[action](resource);
   if (!permission.granted) {
    console.log("The account is unauthorized for this request")
    return res.redirect(403, '/home')
   }
   next()
  } catch (error) {
   next(error)
  }
 }
}


