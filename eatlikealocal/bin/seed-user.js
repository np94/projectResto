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

  {
    firstname: "Benoit",
    lastname: "Lecroix",
    email: "bp@lecroix.fr",
    password: "777",
    city: "Bordeaux",
    // restaurant: [{ type: Schema.Types.ObjectId, ref: "restaurant" }],
    // comment: [{ type: Schema.Types.ObjectId, ref: "comment" }],
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },

  {
    firstname: "Alice",
    lastname: "Perez",
    email: "aliceperez@ymail.com",
    password: "123",
    city: "Milan",
    // restaurant: [{ type: Schema.Types.ObjectId, ref: "restaurant" }],
    // comment: [{ type: Schema.Types.ObjectId, ref: "comment" }],
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
  },

  {
    firstname: "Carina",
    lastname: "Santos",
    email: "santos@join.com",
    password: "000",
    city: "Berlin",
    // restaurant: [{ type: Schema.Types.ObjectId, ref: "restaurant" }],
    // comment: [{ type: Schema.Types.ObjectId, ref: "comment" }],
    avatar:
      "https://dwpdigital.blog.gov.uk/wp-content/uploads/sites/197/2016/07/P1090594-1.jpeg",
  },

  {
    firstname: "Ivan",
    lastname: "O'donald",
    email: "ivan@users.com",
    password: "000",
    city: "Berlin",
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
