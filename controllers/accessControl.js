const { roles }  = require('./roles')
const books = require('./books')
 
exports.grantAccess = function(action, resource) {
 return async (req, res, next) => {
  try {
   const permission = roles.can(req.session.role)[action](resource);
   if (!permission.granted) {
    console.log("The user don't have enough permission for this request")
    return res.redirect('/home/user')
   }
   next()
  } catch (error) {
   next(error)
  }
 }
}
