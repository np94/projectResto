// require("dotenv").config();
// require("../config/mongo"); // fetch the db connection
// const RestaurantModel = require("../model/Restaurant"); // fetch the model to validate our user document before insertion (in database)

// const restaurants = [
//     {
//         firstname: "Anne",
//         lastname: "Duclaux",
//         email: "avduclaux@ironhack.fr",
//         password: "000",
//         city: "Paris",
//         restaurant: [{ type: Schema.Types.ObjectId, ref: "restaurant" }],
//         comment: [{ type: Schema.Types.ObjectId, ref: "comment" }],
//         avatar: {
//           type: String,
//           default:
//             "https://www.pinclipart.com/picdir/middle/157-1578186_user-profile-default-image-png-clipart.png",
//         },

// ];

// async function insertRestaurants() {
//   try {
//     await RestaurantModel.deleteMany();
//     const inserted = await RestaurantModel.insertMany(restaurants);
//     console.log(
//       `seed restaurants done : ${inserted.length} documents inserted !`
//     );
//   } catch (err) {
//     console.error(err);
//   }
// }

// insertRestaurants();
