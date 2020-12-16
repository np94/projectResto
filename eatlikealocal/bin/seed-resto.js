require("dotenv").config();
require("../config/mongo"); // fetch the db connection
const RestaurantModel = require("../model/Restaurant"); // fetch the model to validate our user document before insertion (in database)
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurants = [
  {
    name: "Il Latini",
    genre: "Italian",
    website: "www.illatini.com",
    streetName: " 6R Via dei palchetti",
    city: "50100 Florence",
    country: "Italy",
    description: "Nice italian food",
    price: "€€",
    user: mongoose.Types.ObjectId("5fd7741fe982536524adf8a3"),
    comment: [mongoose.Types.ObjectId("5fd8bb21b818dfc6dccf2178")],
    picture: "../images/florence1.jpg",
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
    picture: "../images/florence2.jpg",
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
    picture: "../images/florence3.jpg",
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
  {
    name: "Zenith Café",
    genre: "Vietnamese",
    website: "www.zenithyogavietnam.com",
    address: {
      number: "99b/275",
      streetName: "Au Co Tay Ho",
      city: "Hanoi",
      zipCode: "100000",
      country: "Vietnam",
    },
    description: "Vegan vietnamien cuisine",
    price: "€",
    // user: "["default"]",
    // comment: default,
    picture:
      "https://www.pinclipart.com/picdir/middle/157-1578186_user-profile-default-image-png-clipart.png",
  },
  {
    name: "Bun Bo Nam Bo - Ba Ba",
    genre: "Vietnamese",
    website: "https://www.facebook.com/bababunbonambo/",
    address: {
      number: "76",
      streetName: "Nguyen Thai Binh Nguyen Thai Binh Ward, District 1",
      city: "Ho Chi Minh",
      zipCode: "700000",
      country: "Vietnam",
    },
    description: "Authentic vietnamese cuisine",
    price: "€",
    // user: "["default"]",
    // comment: default,
    picture:
      "https://www.pinclipart.com/picdir/middle/157-1578186_user-profile-default-image-png-clipart.png",
  },
  {
    name: "Hoi An Tofu Restaurant & Coffee",
    genre: "Vietnamese",
    website: "https://www.facebook.com/hoiantofurestaurant/",
    address: {
      number: "180",
      streetName: "Tran Nhan Hoi An Ancient Town",
      city: "Hoi An",
      zipCode: "560000",
      country: "Vietnam",
    },
    description: "Vietnamese street food",
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
