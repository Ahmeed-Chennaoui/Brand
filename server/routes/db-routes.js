const dbRouter = require("express").Router();
const {
  findUser,
  createUser,
  getProfessionals,
  getFilteredUsers,
} = require("../models/user-model");
const { authenticateToken } = require("../middlewares/auth");
const fs = require("fs");
const path = require("path");
dbRouter.post("/user", async (req, res) => {
  return await res.json(await createUser(req.body));
});

dbRouter.get("/user/:email", async (req, res) => {
  res.json(await findUser(req.params.email));
});
dbRouter.get("/posts", async (req, res) => {
  res.json(await getProfessionals());
});
dbRouter.get("/postsQuery", async (req, res) => {
  const { minPrice, maxPrice } = req.query;
  //cannot pass array in query so im using post
  const filter = {
    price: {
      $gt: minPrice ? Number(minPrice) : 0,
      $lt: maxPrice ? Number(maxPrice) : 9999999,
    },
  };

  res.json(await getFilteredUsers(filter));
});
dbRouter.post("/postsQuery", async (req, res) => {
  const filter = req.body;
  res.json(await getFilteredUsers(filter));
});
dbRouter.post("/review/:email", authenticateToken, async (req, res) => {
  try {
    const existingWorker = await findUser(req.params.email);
    const { email, stars, description } = req.body;
    const emailList = existingWorker.reviews.map((el) => el.email);
    if (email === req.params.email) {
      return res.json({ error: "You cant leave a review to yourself" });
    }
    if (emailList.includes(email)) {
      const updatedReviews = existingWorker.reviews.map((el) => {
        if (el.email === email) {
          return { email, stars, description };
        }
        return el;
      });
      existingWorker.reviews = updatedReviews;
      await existingWorker.save();
      return res.json({ message: "Your review has been updated" });
    }
    const review = { email, stars, description };
    const reviews = [...existingWorker.reviews, review];
    existingWorker.reviews = reviews;
    await existingWorker.save();
    res.json({ message: "Your review has been successfully added" });
  } catch (err) {
    res.json({ error: "an error occured : " + err });
  }
});
dbRouter.get("/images/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.join(__dirname, "..", "uploads", "images", imageName);
  let ext = path.extname(imageName);
  ext = ext.replace(".", "");
  console.log(ext);
  fs.readFile(imagePath, (err, data) => {
    if (err) {
      res.json("no such image " + err);
    } else {
      res.writeHead(200, { "content-type": `image/${ext}` });
      res.end(data);
    }
  });
});
dbRouter.get("/images/download/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.join(__dirname, "..", "uploads", "images", imageName);
  res.download(imagePath);
});

module.exports = {
  dbRouter,
};
