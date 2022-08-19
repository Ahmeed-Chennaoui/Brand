const router = require("express").Router();
const passport = require("passport");

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);
router.get(
  "/auth/google/callback",
  // after authenticate verifycallback() is called in passport-setup
  passport.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: "/",
    session: true,
  }),
  (req, res) => {
    res.send(req.user);
  }
);
router.get("/logout", (req, res) => {
  req.logOut();
  res.redirect("/");
});

module.exports = {
  router,
};
