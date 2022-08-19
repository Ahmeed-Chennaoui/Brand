const passport = require("passport");
const { Strategy } = require("passport-google-oauth20");
const User = require("../models/user-model");

async function verifyCallback(accessToken, refreshToken, profile, done) {
  //   console.log("google profile : ", profile);
  const existingUser = await User.findOne({ googleId: profile.id });
  if (!existingUser) {
    const newUser = new User({
      username: profile.displayName,
      name: profile.name.givenName,
      familyName: profile.name.familyName,
      googleId: profile.id,
      picture: profile._json.picture,
      email: profile._json.email,
    });
    console.log(newUser);
    await newUser.save();
    done(null, newUser);
  } else {
    done(null, existingUser);
    console.log(`Welcome back ${profile.displayName} !`);
  }
}
passport.serializeUser((user, done) => {
  done(null, user._id);
});
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});
const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  COOKIE_KEY: process.env.COOKIE_KEY,
};
const AUTH_OPTIONS = {
  callbackURL: "/auth/google/callback",
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
};

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));
