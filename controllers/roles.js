const AccessControl = require("accesscontrol");
const ac = new AccessControl();
 
exports.roles = (function() {
ac.grant("user")
 .readOwn("book")
 .updateOwn("book")
 
ac.grant("admin")
 .extend("user")
 .readAny("book")
 .deleteAny("book")

return ac; 
})();