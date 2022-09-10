const authRouter = require("express").Router();
const passport = require("passport");
const {
  register,
  login,
  sendToken,
  sendRequest,
} = require("../controllers/auth-controllers");
const { authenticateToken } = require("../middlewares/auth");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, path.join(__dirname, "..", "uploads", "images"));
  },

  filename: function (req, file, callback) {
    callback(
      null,
      uuidv4() + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const fileFilter = (req, file, callback) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

let upload = multer({ storage, fileFilter });

authRouter.post("/auth/register", upload.single("photo"), register);
authRouter.post("/auth/login", login);
authRouter.post("/auth/google", sendToken);
authRouter.post(
  "/auth/request",
  upload.single("idPhoto"),
  authenticateToken,
  sendRequest
);
authRouter.get("/test", authenticateToken);

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
