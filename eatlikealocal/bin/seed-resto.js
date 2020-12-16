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
    streetname: "6R Via dei palchetti",
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
    streetname: "22 Via del Moro",
    city: "50100 Florence",
    country: "Italy",
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
    streetname: "2 Via Rosina",
    city: "50100 Florence",
    country: "Italy",
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
    streetname: "21 Fortuna utca",
    city: "1014 Budapest",
    country: "Hungary",
    description: "Traditional Hungarian Food",
    price: "€",
    // user: "["default"]",
    // comment: default,
    picture: "../images/budapest1.jpeg",
  },
  {
    name: "FATÁL",
    genre: "Hungarian",
    website: "www.fatalrestaurant.com",
    streetname: " 67 V Váci utca",
    city: "Budapest",
    country: "1056 Hungary",
    description:
      "The restaurant serves massive hungarian meal, it could be fatal!",
    price: "€€",
    // user: "["default"]",
    // comment: default,
    picture: "../images/budapest2.jpeg",
  },
  {
    name: "BAGOLIVÁR",
    genre: "Hungarian",
    website: "www.bagolyvar.com",
    streetName: "4 Gundel Károly út ",
    city: "1146 Budapest",
    country: "Hungary",
    description:
      "Family restaurant for local pork & beef dishes, in a century-old wooden house with dark beams.",
    price: "€",
    // user: "["default"]",
    // comment: default,
    picture: "../images/budapest3.jpeg",
  },
  {
    name: "Zenith Café",
    genre: "Vietnamese",
    website: "www.zenithyogavietnam.com",
    streetName: "99b/275 Au Co Tay Ho",
    city: "100000 Hanoi",
    country: "Vietnam",
    description: "Vegan vietnamien cuisine",
    price: "€",
    // user: "["default"]",
    // comment: default,
    picture: "../images/vietnam1.jpg",
  },
  {
    name: "Bun Bo Nam Bo - Ba Ba",
    genre: "Vietnamese",
    website: "https://www.facebook.com/bababunbonambo/",
    streetName: "76 Nguyen Thai Binh Nguyen Thai Binh Ward, District 1",
    city: "700000 Ho Chi Minh",
    country: "Vietnam",
    description: "Authentic vietnamese cuisine",
    price: "€",
    // user: "["default"]",
    // comment: default,
    picture: "../images/vietnam2.jpg",
  },
  {
    name: "Hoi An Tofu Restaurant & Coffee",
    genre: "Vietnamese",
    website: "https://www.facebook.com/hoiantofurestaurant/",
    streetName: "180 Tran Nhan Hoi An Ancient Town",
    city: "Hoi An",
    country: "560000 Vietnam",
    description: "Vietnamese street food",
    price: "€",
    // user: "["default"]",
    // comment: default,
    picture: "../images/vietnam3.jpg",
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
