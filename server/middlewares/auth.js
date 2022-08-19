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
module.exports = {
  checkLoggedIn,
};
