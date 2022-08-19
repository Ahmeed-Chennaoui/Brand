const passport = require("passport");
const cookieSession = require("cookie-session");
const express = require("express");
const helmet = require("helmet");
const https = require("https");
require("dotenv").config();
const fs = require("fs");
const { router } = require("./routes/auth-routes");
const mongoose = require("mongoose");
const passportSetup = require("./config/passport-setup");
const { checkLoggedIn } = require("./middlewares/auth");

const app = express();

// security features added in the header
app.use(helmet());
app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_KEY],
    maxAge: 24 * 60 * 60 * 1000,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", router);

app.get("/", (req, res) => {
  return res.send("test");
});

app.get("/failure", (req, res) => {
  return res.send("failure");
});

app.get("/secure", checkLoggedIn, (req, res) => {
  return res.send("secure");
});
mongoose.connect(process.env.MONGO_URI, () => {
  console.log("connected to mongoDB");
});
https
  .createServer(
    {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    app
  )
  .listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT} ...`);
  });
// used opensll to create a self signed certificate
// to be changed in production
