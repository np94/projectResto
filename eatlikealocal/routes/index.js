const express = require("express");
const router = express.Router();
const RestaurantModel = require("./../model/Restaurant");

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

//  TO REVIEW =>  GET Sign-up page
const UserModel = require("./../model/User");
const CommentModel = require("./../model/Comment");

router.get("/signup", async (req, res, next) => {
  try {
    res.render("signup");
  } catch (err) {
    next(err);
  }
});

// TO REVIEW =>  POST Sign-up page
router.post("/signup", async (req, res, next) => {
  const newUser = { ...req.body };

  try {
    await UserModel.create(newUser);
    res.redirect("/signin/home"); //redirect to sign-in home?
  } catch (err) {
    next(err);
  }
});

module.exports = router;
