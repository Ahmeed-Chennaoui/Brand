const dbRouter = require("express").Router();
const { findUser, createUser } = require("../models/user-model");

dbRouter.post("/user", async (req, res) => {
  return await res.json(await createUser(req.body));
});
dbRouter.get("/user/:email", async (req, res) => {
  console.log(req.params.email);
  res.json(await findUser(req.params.email));
});

module.exports = {
  dbRouter,
};
