
const jwtUtils = require("../utils/jwt.utils")

exports.checkToken = (req, res, next) => {
   // Getting auth header
   let headerAuth = jwtUtils.getUserToken(req)
   let userId = jwtUtils.getUserId(headerAuth)

   if (userId === -1) {
      res.status(498).json({ "error": "invalid taken" })
   } else {
      next()
   }
}