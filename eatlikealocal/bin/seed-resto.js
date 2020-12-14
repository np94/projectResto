require("dotenv").config();
require("../config/mongo"); // fetch the db connection
const RestaurantModel = require("../model/Restaurant"); // fetch the model to validate our user document before insertion (in database)

const restaurants = [
  {
    name: "Il Latini",
    genre: "Italian",
    website: "www.illatini.com",
    address: {
      number: "6R",
      streetName: "Via dei palchetti",
      city: "Firenze",
      zipCode: "50100",
      country: "Italy",
    },
    description: "Nice italian food",
    price: "€€",
    // user: "["default"]",
    // comment: default,
    picture:
      "https://www.pinclipart.com/picdir/middle/157-1578186_user-profile-default-image-png-clipart.png",
  },
];

async function insertRestaurants() {
  try {
    await RestaurantModel.deleteMany();
    const inserted = await RestaurantModel.insertMany(restaurants);
    console.log(
      `seed restaurants done : ${inserted.length} documents inserted !`
    );
  } catch (err) {
    console.error(err);
  }
}

insertRestaurants();
