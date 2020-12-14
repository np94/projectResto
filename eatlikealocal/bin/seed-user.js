require("dotenv").config();
require("../config/mongo"); // fetch the db connection
const UserModel = require("../model/User"); // fetch the model to validate our user document before insertion (in database)

const users = [
  {
    firstname: "Anne",
    lastname: "Duclaux",
    email: "annevic@ironhack.fr",
    password: "911",
    city: "Paris",
    // restaurant: [{ type: Schema.Types.ObjectId, ref: "restaurant" }],
    // comment: [{ type: Schema.Types.ObjectId, ref: "comment" }],
    avatar:
      "https://www.pinclipart.com/picdir/middle/157-1578186_user-profile-default-image-png-clipart.png",
  },
];

async function insertUsers() {
  try {
    await UserModel.deleteMany();
    const inserted = await UserModel.insertMany(users);
    console.log(`seed users done : ${inserted.length} documents inserted !`);
  } catch (err) {
    console.error(err);
  }
}

insertUsers();
