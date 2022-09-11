const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const { isLink } = require("../utils/isLink");
const path = require("path");
const ReviewSchema = new Schema({
  email: String,
  stars: Number,
  description: String,
});
const userSchema = new Schema({
  userName: String,
  googleId: String,
  name: String,
  familyName: String,
  picture: String,
  email: String,
  password: String,
  profession: String,
  city: String,
  phone: Number,
  description: String,
  price: Number,
  reviews: [ReviewSchema],
});

const User = mongoose.model("user", userSchema);

const findUser = async (email) => {
  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    return existingUser;
  } else {
    return { error: "User doesn't exist" };
  }
};
const getProfessionals = async () => {
  const response = await User.find({ profession: /[\w\W]*/ });
  return response;
};
const getFilteredUsers = async (filter) => {
  try {
    const response = await User.find(filter);
    return response;
  } catch (err) {
    return { error: "something went wrong " + err };
  }
};

const createUser = async (user, method) => {
  const existingUser = await User.findOne({ email: user.email });
  if (!existingUser) {
    try {
      // const photo =
      //   user.photo && !isLink(user.photo)
      //     ? path.join(__dirname, "..", "uploads", "images", user.photo)
      //     : user.photo;
      const photo = user.photo ? user.photo : null;

      let newUserData = {
        userName: user.userName,
        name: user.givenName,
        familyName: user.familyName,
        picture: photo,
        email: user.email,
      };
      if (method === "manual") {
        let hashedPassword = await bcrypt.hash(user.password, 10);
        newUserData = { ...newUserData, password: hashedPassword };
      }
      const newUser = new User(newUserData);

      await newUser.save();
    } catch (err) {
      return { error: "An error occured while creating your account " + err };
    }
    return { message: "Your account has been successfully created" };
  } else {
    console.log(`Welcome back ${existingUser.userName} !`);
    return { error: "email already in use" };
  }
};

module.exports = {
  User,
  createUser,
  findUser,
  getProfessionals,
  getFilteredUsers,
};
