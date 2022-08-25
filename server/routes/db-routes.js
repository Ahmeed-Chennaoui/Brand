const dbRouter = require("express").Router();
const { createUser } = require("../models/user-model");

dbRouter.post("/user", async (req, res) => {
  await createUser(req.body);
  res.send(req.body);
});

module.exports = {
  dbRouter,
};
