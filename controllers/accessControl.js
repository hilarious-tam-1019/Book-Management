const { roles }  = require('./roles')
 
exports.grantAccess = function(action, resource) {
 return async (req, res, next) => {
  try {
   const permission = roles.can(req.session.role)[action](resource);
   if (!permission.granted) {
    console.log("The user don't have enough permission for this request")
    return res.status(401).json({
     error: "You don't have enough permission to perform this action"
    });
   }
   res.re
   next()
  } catch (error) {
   next(error)
  }
 }
}