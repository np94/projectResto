const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    comment: String,
    // author: [{ type: Schema.Types.ObjectId, ref: "user" }],
    // restaurant: [{ type: Schema.Types.ObjectId, ref: "restaurant" }],
  },
  { timestamps: true }
);

const CommentModel = mongoose.model("Comment", commentSchema);

module.exports = CommentModel;
