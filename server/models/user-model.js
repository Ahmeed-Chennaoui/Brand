const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  googleId: String,
  name: String,
  familyName: String,
  picture: String,
  email: String,
});

const User = mongoose.model("user", userSchema);

const createUser = async (user) => {
  const existingUser = await User.findOne({ email: user.email });
  if (!existingUser) {
    const newUser = new User({
      username: user.userName,
      name: user.givenName,
      familyName: user.familyName,
      picture: user.photo,
      email: user.email,
    });
    console.log(newUser);
    await newUser.save();
  } else {
    console.log(`Welcome back ${existingUser.userName} !`);
  }
};

module.exports = { User, createUser };
