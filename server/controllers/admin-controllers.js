const { VerifRequest } = require("../models/verifRequest-model");
const { User } = require("../models/user-model");

const verifyUser = async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) return res.json({ error: "user no longer exists" });
    const existingVerifRequest = await VerifRequest.findOne({
      email,
    });
    if (!existingVerifRequest)
      return res.json({ error: "request no longer exists" });

    existingUser.phone = existingVerifRequest.phone;
    existingUser.city = existingVerifRequest.city;
    existingUser.description = existingVerifRequest.description;
    existingUser.profession = existingVerifRequest.profession;
    existingUser.price = existingVerifRequest.price;
    await existingUser.save();
    existingVerifRequest.pending = false;
    await existingVerifRequest.save();
    return res.json({ message: "User verified !" });
  } catch (err) {
    return res.json({ error: "something went wrong" });
  }
};
const getAllRequests = async (req, res) => {
  const requestList = await VerifRequest.find().sort({ _id: -1 });
  res.json(requestList);
};

module.exports = {
  verifyUser,
  getAllRequests,
};
