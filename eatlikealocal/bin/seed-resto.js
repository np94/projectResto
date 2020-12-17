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
    streetname: "6R Via dei palchetti 50100, Florence, Italy",
    city: "Florence",
    country: "Italy",
    description: "Nice italian food",
    price: "€€",
    user: mongoose.Types.ObjectId("5fd7741fe982536524adf8a3"),
    comment: [mongoose.Types.ObjectId("5fd8bb21b818dfc6dccf2178")],
    picture:
      "https://res.cloudinary.com/dqlkhve6f/image/upload/v1608198661/eatlikealocal/florence1_pmuccw.jpg",
  },
  {
    name: "L'Osteria di Giovanni",
    genre: "Italian",
    website: "www.osteriadigiovanni.it",
    streetname: "22 Via del Moro, 50100 Florence, Italy",
    city: "Florence",
    country: "Italy",
    description: "Typical tuscani cuisine",
    price: "€€",
    // user: "["default"]",
    // comment: default,
    picture:
      "https://res.cloudinary.com/dqlkhve6f/image/upload/v1608198711/eatlikealocal/florence2_xw0w5r.jpg",
  },

  {
    name: "Trattoria Mario",
    genre: "Italian",
    website: "www.trattoriamario.com",
    streetname: "2 Via Rosina, 50100 Florence, Italy",
    city: "Florence",
    country: "Italy",
    description: "This restaurant exist since 1953",
    price: "€",
    // user: "["default"]",
    // comment: default,
    picture:
      "https://res.cloudinary.com/dqlkhve6f/image/upload/v1608198698/eatlikealocal/florence3_qf6fx9.jpg",
  },
  {
    name: "21 MAGYAR VENDÉGLÖ",
    genre: "Hungarian",
    website: "www.21restaurant.hu",
    streetname: "21 Fortuna utca, 1014 Budapest, Hungary",
    city: "Budapest",
    country: "Hungary",
    description: "Traditional Hungarian Food",
    price: "€",
    // user: "["default"]",
    // comment: default,
    picture:
      "https://res.cloudinary.com/dqlkhve6f/image/upload/v1608198653/eatlikealocal/budapest1_cxocsj.jpg",
  },
  {
    name: "FATÁL",
    genre: "Hungarian",
    website: "www.fatalrestaurant.com",
    streetname: "67 V Váci utca, 1056 Budapest, Hungary",
    city: "Budapest",
    country: "Hungary",
    description:
      "The restaurant serves massive hungarian meal, it could be fatal!",
    price: "€€",
    // user: "["default"]",
    // comment: default,
    picture:
      "https://res.cloudinary.com/dqlkhve6f/image/upload/v1608198653/eatlikealocal/budapest2_frqf15.jpg",
  },
  {
    name: "BAGOLIVÁR",
    genre: "Hungarian",
    website: "www.bagolyvar.com",
    streetname: "4 Gundel Károly út, 1146 Budapest, Hungary",
    city: "Budapest",
    country: "Hungary",
    description:
      "Family restaurant for local pork & beef dishes, in a century-old wooden house with dark beams.",
    price: "€",
    // user: "["default"]",
    // comment: default,
    picture:
      "https://res.cloudinary.com/dqlkhve6f/image/upload/v1608198654/eatlikealocal/budapest3_febapj.jpg",
  },
  {
    name: "Zenith Café",
    genre: "Vietnamese",
    website: "www.zenithyogavietnam.com",
    streetname: "99b/275 Au Co Tay Ho, 100000 Hanoi, Vietnam",
    city: "Hanoi",
    country: "Vietnam",
    description: "Vegan vietnamien cuisine",
    price: "€",
    // user: "["default"]",
    // comment: default,
    picture:
      "https://res.cloudinary.com/dqlkhve6f/image/upload/v1608198720/eatlikealocal/vietnam1_rguoh6.jpg",
  },
  {
    name: "Bun Bo Nam Bo - Ba Ba",
    genre: "Vietnamese",
    website: "https://www.facebook.com/bababunbonambo/",
    streetname:
      "76 Nguyen Thai Binh Nguyen Thai Binh Ward, District 1, 700000 Ho Chi Minh, Vietnam",
    city: "Ho Chi Minh",
    country: "Vietnam",
    description: "Authentic vietnamese cuisine",
    price: "€",
    // user: "["default"]",
    // comment: default,
    picture:
      "https://res.cloudinary.com/dqlkhve6f/image/upload/v1608198724/eatlikealocal/vietnam2_zwoes1.jpg",
  },
  {
    name: "Hoi An Tofu Restaurant & Coffee",
    genre: "Vietnamese",
    website: "https://www.facebook.com/hoiantofurestaurant/",
    streetname: "180 Tran Nhan Hoi An Ancient Town, 560000 Hoi An, Vietnam",
    city: "Hoi An",
    country: "Vietnam",
    description: "Vietnamese street food",
    price: "€",
    // user: "["default"]",
    // comment: default,
    picture:
      "https://res.cloudinary.com/dqlkhve6f/image/upload/v1608198718/eatlikealocal/vietnam3_f8qe5c.jpg",
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
