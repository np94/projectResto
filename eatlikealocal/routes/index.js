const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// Display all restaurants
router.get("/restaurant", async (req, res, next) => {
  try {
    const allRestaurants = await RestaurantModel.find();
    res.render("all-restaurants", { allRestaurants });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
