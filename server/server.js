const passport = require("passport");
const cookieSession = require("cookie-session");
const express = require("express");
const helmet = require("helmet");
const https = require("https");
const cors = require("cors");
require("dotenv").config();
const fs = require("fs");
const { authRouter } = require("./routes/auth-routes");
const { dbRouter } = require("./routes/db-routes");
const mongoose = require("mongoose");
const passportSetup = require("./config/passport-setup");
const { checkLoggedIn } = require("./middlewares/auth");
const bodyParser = require('body-parser');

const app = express();
//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// security features added in the header
app.use(helmet());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_KEY],
    maxAge: 24 * 60 * 60 * 1000,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/", authRouter);
app.use("/", dbRouter);

app.get("/failure", (req, res) => {
  return res.send("failure");
});

app.get("/secure", checkLoggedIn, (req, res) => {
  return res.send("secure");
});
//posts
const postsRoute = require ('./routes/posts');
app.use('/posts', postsRoute);

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
