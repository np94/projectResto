const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  email: { type: String, unique: true },
  password: String,
  city: String,
  // restaurant: [{ type: Schema.Types.ObjectId, ref: "restaurant" }],
  // comment: [{ type: Schema.Types.ObjectId, ref: "comment" }],
  avatar: {
    type: String,
    default:
      "https://www.pinclipart.com/picdir/middle/157-1578186_user-profile-default-image-png-clipart.png",
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
