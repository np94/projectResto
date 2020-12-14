const mongoose = require("mongoose");
const { map } = require("../app");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema(
  {
    name: String,
    genre: String,
    website: { type: String, unique: true },
    address: {
      number: String,
      streetName: String,
      city: String,
      zipCode: String,
      country: String,
    },
    description: String,
    price: { type: String, enum: ["€", "€€", "€€€"] },
    // user: [{ type: Schema.Types.ObjectId, ref: "user", default: "test" }],
    // comment: [{ type: Schema.Types.ObjectId, ref: "comment", default: "test" }],
    picture: {
      type: String,
      default:
        "https://www.pinclipart.com/picdir/middle/157-1578186_user-profile-default-image-png-clipart.png",
    },
  },
  { timestamps: true }
);

const RestaurantModel = mongoose.model("Restaurant", restaurantSchema);

module.exports = RestaurantModel;
