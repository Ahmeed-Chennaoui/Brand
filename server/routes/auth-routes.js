const authRouter = require("express").Router();
const passport = require("passport");

authRouter.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

authRouter.get(
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

authRouter.get("/logout", (req, res) => {
  req.logOut();
  res.redirect("/");
});

module.exports = {
  authRouter,
};
