const mongoose = require("mongoose");
const path = require("path");
const { User } = require("../models/user-model");

const Schema = mongoose.Schema;

const requestSchema = new Schema({
  email: String,
  description: String,
  profession: String,
  phone: String,
  city: String,
  idPhoto: String,
  price: String,
  pending: Boolean,
});
const VerifRequest = mongoose.model("verifRequest", requestSchema);

const createVerifRequest = async (request) => {
  const existingVerifRequest = await VerifRequest.findOne({
    email: request.email,
  });
  if (existingVerifRequest && existingVerifRequest.pending) {
    return { error: "Your request is already pending " };
  }
  try {
    const existingUser = await User.findOne({ email: request.email });
    if (existingUser.profession) {
      return { error: "You are already a registered professional" };
    }
    if (
      !request.profession ||
      !request.city ||
      !request.phone ||
      !request.idPhoto ||
      !request.description ||
      !request.price
    ) {
      return { error: "All the fields are required for verification" };
    }
    if (request.description.split(" ").length < 5) {
      return { error: "Service description must be atleast 5 words long" };
    }

    const newRequestData = {
      email: request.email,
      description: request.description,
      profession: request.profession,
      phone: request.phone,
      city: request.city,
      price: request.price,
      idPhoto: request.idPhoto,
      pending: true,
    };
    const newRequest = new VerifRequest(newRequestData);
    await newRequest.save();
    return { message: "your request has been sent for verification" };
  } catch (err) {
    return { error: "something went wrong with your request " + err };
  }
};
module.exports = {
  VerifRequest,
  createVerifRequest,
};
