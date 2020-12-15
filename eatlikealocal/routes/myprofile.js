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

// GET - create new resto
router.get("/dashboard/create", async (req, res, next) => {
  try {
    res.render("private/create");
  } catch (err) {
    console.log(err);
    next(err);
  }
});

// POST - create new resto
router.post("/dashboard/create", async (req, res, next) => {
  const newResto = { ...req.body };
  console.log(newResto);
  try {
    await RestaurantModel.create(newResto);
    res.redirect("/myprofile/dashboard");
  } catch (err) {
    next(err);
  }
});

router.get("/dashboard/update/:id", async (req, res, next) => {
  try {
    const restaurantUpdate = await RestaurantModel.findById(req.params.id); // fetch the label to update
    res.render("private/update", { restaurantUpdate }); // pass the found label to the view
  } catch (err) {
    next(err); // if an error occurs, display it on error.hbs page
  }
});

router.get("/dashboard/delete/:id", async (req, res, next) => {
  try {
    // use the model to delete one label by id
    await RestaurantModel.findByIdAndDelete(req.params.id);
    res.redirect("/myprofile/dashboard"); // then redirect to labels full list
  } catch (err) {
    next(err);
  }
});

router.post("/dashboard/update/:id", async (req, res, next) => {
  const restoToUpdate = { ...req.body };
  try {
    await RestaurantModel.findByIdAndUpdate(req.params.id, restoToUpdate, {
      new: true,
    });
    res.redirect("/myprofile/dashboard");
  } catch (err) {
    next(err);
  }
});

// GET My Comments page
router.get("/dashboard/comment", async (req, res, next) => {
  try {
    const allComments = await CommentModel.find()
      .populate("author")
      .populate("restaurant");
    res.render("private/my-comments", { allComments });
    console.log(allComments);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

// GET delete comment page
router.get("/dashboard/comment/delete/:id", async (req, res, next) => {
  try {
    await CommentModel.findByIdAndRemove(req.params.id);
    res.redirect("/myprofile/dashboard/comment");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
