const express = require("express");
const router = express.Router();
const RestaurantModel = require("./../model/Restaurant");
const UserModel = require("./../model/User");
const CommentModel = require("./../model/Comment");

router.get("/", async (req, res, next) => {
  try {
    const restaurants = await RestaurantModel.find();
    res.render("private/index", { restaurants });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
