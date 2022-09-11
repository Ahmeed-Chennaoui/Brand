const adminRouter = require("express").Router();
const {
  verifyUser,
  getAllRequests,
} = require("../controllers/admin-controllers");

adminRouter.post("/request", verifyUser);
adminRouter.get("/requests", getAllRequests);

module.exports = {
  adminRouter,
};
