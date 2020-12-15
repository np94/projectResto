require("dotenv").config();
require("../config/mongo"); // fetch the db connection
const CommentModel = require("../model/Comment"); // fetch the model to validate our user document before insertion (in database)

const comments = [
  {
    comment: "best restau ever",
    author: ["5fd74d47acaae865f442fee8"],
    restaurant: ["5fd7691512a3ef217c5fb291"],
  },

  {
    comment: "AAAAA",
    author: ["5fd74d47acaae865f442fee8"],
    restaurant: ["5fd7691512a3ef217c5fb291"],
  },

  {
    comment: "222222",
    author: ["5fd74d47acaae865f442fee8"],
    restaurant: ["5fd7691512a3ef217c5fb291"],
  },
];

async function insertComments() {
  try {
    await CommentModel.deleteMany();
    await CommentModel.insertMany(comments);
    const inserted = await CommentModel.find().populate("restaurant user") ;
    console.log(inserted);
    console.log(`seed comments done : ${inserted.length} documents inserted !`);
  } catch (err) {
    console.error(err);
  }
}

insertComments();

