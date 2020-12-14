const express = require("express");
const router = express.Router();
const RestaurantModel = require("./../model/Restaurant");
const UserModel = require("./../model/User");
const CommentModel = require("./../model/Comment");

//Display the index page for a signed in user
router.get("/", (req, res, next) => {
  res.render("private/index");
});

// Display all restaurants for a signed in user
router.get("/restaurant", async (req, res, next) => {
  try {
    const allRestaurants = await RestaurantModel.find();
    res.render("private/all-restaurants", { allRestaurants });
    console.log(allRestaurants);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

// Display one restaurant for a signed in user
router.get("/restaurant/:id", async (req, res, next) => {
  try {
    const oneRestaurant = await RestaurantModel.findById(req.params.id);
    res.render("private/one-restaurant", oneRestaurant);
    console.log(oneRestaurant);
  } catch (err) {
    next(err);
  }
});

// Display all restaurants added by the user
router.get("/dashboard", async (req, res, next) => {
  try {
    const allRestaurants = await RestaurantModel.find({ genre: "Italian" });
    res.render("private/dashboard", { allRestaurants });
    console.log(allRestaurants);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

// Display the create form
router.get("/dashboard/create", async (req, res, next) => {
  try {
    res.render("private/create");
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
