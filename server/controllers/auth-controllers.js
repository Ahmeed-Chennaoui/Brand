const { createUser, User } = require("../models/user-model");
const {
  VerifRequest,
  createVerifRequest,
} = require("../models/verifRequest-model");
const { isValidEmail } = require("../utils/isValidEmail");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { request } = require("express");

const register = async (req, res) => {
  const { password, email } = req.body;
  if (!isValidEmail(email))
    return res.json({
      error: "Invalid email address",
    });
  if (!password || password.length < 6) {
    return res.json({ error: "password must be at least 6 characters" });
  }
  const user = req.file ? { ...req.body, photo: req.file.filename } : req.body;
  return await res.json(await createUser(user, "manual"));
};

const sendToken = async (req, res) => {
  const { email } = req.body;
  const accessToken = jwt.sign(email, process.env.JWT_SECRET);
  res.status(200).json({
    AccessToken: accessToken,
  });
};

const login = async (req, res) => {
  const { password, email } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      res.json({
        error: "Wrong email or password",
      });
    } else {
      if (await bcrypt.compare(password, existingUser.password)) {
        const accessToken = jwt.sign(email, process.env.JWT_SECRET);
        res.status(200).json({
          AccessToken: accessToken,
        });
      } else {
        res.json({
          error: "Wrong email or password",
        });
      }
    }
  } catch (er) {
    res.json({
      error: "An error has occured",
    });
  }
};
const sendRequest = async (req, res) => {
  const { email } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      res.json({
        error: "Something went wrong finding user " + email,
      });
    } else {
      const request = req.file
        ? { ...req.body, idPhoto: req.file.filename }
        : req.body;
      return await res.json(await createVerifRequest(request));
    }
  } catch (err) {
    res.json({
      error: "An error has occured" + err,
    });
  }
};
module.exports = {
  register,
  login,
  sendToken,
  sendRequest,
};
