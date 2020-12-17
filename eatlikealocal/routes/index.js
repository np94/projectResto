const express = require("express");
const router = express.Router();
const RestaurantModel = require("./../model/Restaurant");

/* GET home page */
router.get("/", async (req, res, next) => {
  try {
    const allRestaurants = await RestaurantModel.find();
    const cities = [...new Set(allRestaurants.map((restau) => restau.city))];
    res.render("index", { allRestaurants, cities });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

// Display all restaurants
router.get("/restaurant", async (req, res, next) => {
  try {
    const allRestaurants = await RestaurantModel.find().populate("user");
    res.render("all-restaurants", { allRestaurants });
    //console.log(allRestaurants);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

//Display all restaurants by city
router.post("/restaurant/city", async (req, res, next) => {
  try {
    const allRestaurantsByCity = await RestaurantModel.find({
      city: req.body.city,
    });

    console.log("---------------all resto", allRestaurantsByCity);
    res.render("all-restaurants-by-city", { allRestaurantsByCity });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.get("/restaurant/:id", async (req, res, next) => {
  try {
    const oneRestaurant = await RestaurantModel.findById(
      req.params.id
    ).populate("user");
    res.render("one-restaurant", oneRestaurant);
    // console.log(oneRestaurant);
  } catch (err) {
    next(err);
  }
});

//  TO REVIEW =>  GET Sign-up page
const UserModel = require("./../model/User");
const CommentModel = require("./../model/Comment");

module.exports = router;
