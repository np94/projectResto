const UserModel = require("./../model/User");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const flash = require("connect-flash");

router.get("/signin", async (req, res, next) => {
  res.render("auth/signin");
});

router.post("/signin", async (req, res, next) => {
  const { email, password } = req.body;
  const foundUser = await UserModel.findOne({ email: email });
  if (!foundUser) {
    req.flash("error", "Invalid credentials");
    res.redirect("/auth/signin");
  } else {
    const isSamePassword = bcrypt.compareSync(password, foundUser.password);
    if (password !== foundUser.password) {
      req.flash("error", "Invalid credentials");
      res.redirect("/auth/signin");
    } else {
      const userDocument = { ...foundUser };
      const userObject = foundUser.toObject();
      delete userObject.password;
      req.session.currentUser = userObject;
      console.log("you got in!", userObject._id);
      req.flash("success", "Successfully logged in...");
      res.redirect("/myprofile");
    }
  }
});
//  TO REVIEW =>  GET Sign-up page

router.get("/signup", async (req, res, next) => {
  try {
    res.render("auth/signup");
  } catch (err) {
    next(err);
  }
});
// TO REVIEW =>  POST Sign-up page
router.post("/signup", async (req, res, next) => {
  const newUser = { ...req.body };
  console.log(newUser);
  try {
    await UserModel.create(newUser);
    res.redirect("/myprofile"); //redirect to sign-in home?
  } catch (err) {
    next(err);
  }
});

router.post("/signout", (req, res) => {
  // res.sendStatus("hello");
  req.session.destroy();
  res.redirect("/");
});

// //GET sign out
// router.get("/myprofile/dashboard/signout",(req, res) =>
// {
//   req.session.destroy(function (err) {
//     console.log(req.session.currentUser);
//     res.redirect("/");
//   });
// });
module.exports = router;
