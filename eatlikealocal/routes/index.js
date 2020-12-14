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
    console.log(allRestaurants);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

// Display one restaurant
router.get("/restaurant/:id", async (req, res, next) => {
  try {
    const oneRestaurant = await RestaurantModel.findById(req.params.id);
    res.render("one-restaurant", oneRestaurant);
    console.log(oneRestaurant);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
