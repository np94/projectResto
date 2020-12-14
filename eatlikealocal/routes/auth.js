const UserModel = require("./../model/User");
const express = require("express");
const router = express.Router();

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
  try {
    await UserModel.create(newUser);
    res.redirect("/signin/home"); //redirect to sign-in home?
  } catch (err) {
    next(err);
  }
});
module.exports = router;
