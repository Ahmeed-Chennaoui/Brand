const jwt = require("jsonwebtoken");

function checkLoggedIn(req, res, next) {
  const isLoggedIn = req.user;
  if (!isLoggedIn) {
    return res.redirect("/auth/google");
    // return res.status(401).json({
    //   error: "You must be logged in !",
    // });
  }
  next();
}
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader.split(" ")[1];
  if (token == null)
    return res.status(401).json({
      error: "you must be logged in to access this page",
    });
  jwt.verify(token, process.env.JWT_SECRET, (err, email) => {
    if (err)
      return res.status(403).json({
        error: "you must be logged in to access this page",
      });
    req.email = email;
    res.json({
      ok: "ok",
    });
    next();
  });
}
module.exports = {
  checkLoggedIn,
  authenticateToken,
};
