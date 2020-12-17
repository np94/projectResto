const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uploader = require("./../config/cloudinary");

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
      "https://res.cloudinary.com/dqlkhve6f/image/upload/v1608197816/eatlikealocal/157-1578186_user-profile-default-image-png-clipart_fdxsjh.jpg",
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
