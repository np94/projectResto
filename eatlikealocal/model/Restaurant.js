const mongoose = require("mongoose");
const { map } = require("../app");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema(
  {
    name: String,
    genre: String,
    website: { type: String, unique: true },
    streetname: String,
    city: String,
    country: String,
    description: String,
    price: { type: String, enum: ["€", "€€", "€€€"] },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: mongoose.Types.ObjectId("5fd7741fe982536524adf8a3"),
    },
    comment: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    picture: {
      type: String,
      default:
        "https://res.cloudinary.com/dqlkhve6f/image/upload/v1608197816/eatlikealocal/157-1578186_user-profile-default-image-png-clipart_fdxsjh.jpg",
    },
  },
  { timestamps: true }
);

const RestaurantModel = mongoose.model("Restaurant", restaurantSchema);

module.exports = RestaurantModel;
