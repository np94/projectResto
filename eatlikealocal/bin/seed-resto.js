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
      city: "Florence",
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
  {
    name: "L'Osteria di Giovanni",
    genre: "Italian",
    website: "www.osteriadigiovanni.it",
    address: {
      number: "22",
      streetName: "Via del Moro",
      city: "Florence",
      zipCode: "50100",
      country: "Italy",
    },
    description: "Typical tuscani cuisine",
    price: "€€",
    // user: "["default"]",
    // comment: default,
    picture:
      "https://www.pinclipart.com/picdir/middle/157-1578186_user-profile-default-image-png-clipart.png",
  },

  {
    name: "Trattoria Mario",
    genre: "Italian",
    website: "www.trattoriamario.com",
    address: {
      number: "2",
      streetName: "Via Rosina",
      city: "Florence",
      zipCode: "50100",
      country: "Italy",
    },
    description: "This restaurant exist since 1953",
    price: "€",
    // user: "["default"]",
    // comment: default,
    picture:
      "https://www.pinclipart.com/picdir/middle/157-1578186_user-profile-default-image-png-clipart.png",
  },
  {
    name: "21 MAGYAR VENDÉGLÖ",
    genre: "Hungarian",
    website: "www.21restaurant.hu",
    address: {
      number: "21",
      streetName: "Fortuna utca",
      city: "Budapest",
      zipCode: "1014",
      country: "Hungary",
    },
    description: "Traditional Hungarian Food",
    price: "€",
    // user: "["default"]",
    // comment: default,
    picture:
      "https://www.pinclipart.com/picdir/middle/157-1578186_user-profile-default-image-png-clipart.png",
  },
  {
    name: "FATÁL",
    genre: "Hungarian",
    website: "www.fatalrestaurant.com",
    address: {
      number: "67",
      streetName: "V Váci utca",
      city: "Budapest",
      zipCode: "1056",
      country: "Hungary",
    },
    description:
      "The restaurant serves massive hungarian meal, it could be fatal!",
    price: "€€",
    // user: "["default"]",
    // comment: default,
    picture:
      "https://www.pinclipart.com/picdir/middle/157-1578186_user-profile-default-image-png-clipart.png",
  },
  {
    name: "BAGOLIVÁR",
    genre: "Hungarian",
    website: "www.bagolyvar.com",
    address: {
      number: "4",
      streetName: " Gundel Károly út ",
      city: "Budapest",
      zipCode: "1146",
      country: "Hungary",
    },
    description:
      "Family restaurant for local pork & beef dishes, in a century-old wooden house with dark beams.",
    price: "€",
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
