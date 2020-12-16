const express = require("express");
const router = express.Router();
const RestaurantModel = require("./../model/Restaurant");
const UserModel = require("./../model/User");
const CommentModel = require("./../model/Comment");
const session = require("express-session");

//Display the index page for a signed in user
// router.get("/", (req, res, next) => {
//   res.render("private/index");
// });

// Display the 2 latest resto created by the community
router.get("/", async (req, res, next) => {
  try {
    const twoRestaurants = await RestaurantModel.find()
      .populate("user")
      .sort({ createdAt: -1 })
      .limit(2);

    res.render("private/index", { twoRestaurants });
    console.log("two", twoRestaurants);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

// Display all restaurants for a signed in user
router.get("/restaurant", async (req, res, next) => {
  try {
    const allRestaurants = await RestaurantModel.find().populate("user");
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

// Display all restaurants added by the user TO BE FIXED
router.get("/dashboard", async (req, res, next) => {
  try {
    console.log("session", req.session.currentUser);
    const allRestaurants = await RestaurantModel.find({
      // user: req.session.currentUser._id,
    });
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
    res.render("private/create", { script: "script" });
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

// GET - update a resto
router.get("/dashboard/update/:id", async (req, res, next) => {
  try {
    const restaurantUpdate = await RestaurantModel.findById(req.params.id); // fetch the label to update
    res.render("private/update", { restaurantUpdate }); // pass the found label to the view
  } catch (err) {
    next(err); // if an error occurs, display it on error.hbs page
  }
});

// GET - delete a resto
router.get("/dashboard/delete/:id", async (req, res, next) => {
  try {
    // use the model to delete one label by id
    await RestaurantModel.findByIdAndDelete(req.params.id);
    res.redirect("/myprofile/dashboard"); // then redirect to labels full list
  } catch (err) {
    next(err);
  }
});

// POST - update a resto
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
    console.log("toto", req.session);
    res.render("private/my-comments", { allComments });
    // console.log(allComments);
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

// POST comment page
// router.post("/dashboard/comment/create", async (req, res, next) => {
//   const newCom = { ...req.body };
//   console.log(newCom);
//   try {
//     await CommentModel.create(newCom);

//GET comment id
router.get("/dashboard/comment/edit/:id", async (req, res, next) => {
  try {
    const commentUpdate = await CommentModel.findById(req.params.id);
    console.log(commentUpdate);
    res.render("private/comment-edit", { commentUpdate }); // pass the found label to the view
  } catch (err) {
    next(err);
  }
});

//POST edit comment id
// -----------------
router.post("/dashboard/comment/edit/:id", async (req, res, next) => {
  const commentUpdate = { ...req.body };
  console.log("post ----", req.body);
  try {
    await CommentModel.findByIdAndUpdate(req.params.id, commentUpdate, {
      new: true,
    });
    res.redirect("/myprofile/dashboard/comment");
  } catch (err) {
    next(err);
  }
});

// POST - create a comment
// router.post("/dashboard/comment/create", async (req, res, next) => {
//   const newCom = { ...req.body };
//   console.log(newCom);
//   try {
//     await CommentModel.create(newCom);
//     return RestaurantModel.findByIdAndUpdate(restaurant, {
//       $push: { comment: newCom._id },
//     });
//     res.redirect("/myprofile/dashboard/comment");
//   } catch (err) {
//     next(err);
//   }
// });

// POST - create a comment (and push corresponding id resto)
router.post("/dashboard/comment/create", (req, res) => {
  const { author, restaurant, comment } = req.body;
  CommentModel.create({ author, restaurant, comment })
    .then((newCom) => {
      return RestaurantModel.findByIdAndUpdate(restaurant, {
        $push: { comment: newCom._id },
      });
    })
    .then(() => res.redirect("/myprofile/dashboard/comment")) // if everything is fine, redirect to list of posts
    .catch((err) =>
      console.log(`Err while creating the post in the DB: ${err}`)
    );
});

module.exports = router;
