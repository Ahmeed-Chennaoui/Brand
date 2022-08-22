const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { User } = require("../models/user-model");

passport.serializeUser((user, done) => {
  done(null, user._id);
});
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/auth/google/callback",
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    verifyCallback
  )
);

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
