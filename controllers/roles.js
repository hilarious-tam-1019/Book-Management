const AccessControl = require("accesscontrol");
const ac = new AccessControl();
 
exports.roles = (function() {
ac.grant("user")
 .readOwn("book")
 .updateOwn("book")
 
ac.grant("admin")
 .readAny("book")
 .updateAny("book")
 .deleteAny("book")
 .createAny("book")

return ac; 
})();