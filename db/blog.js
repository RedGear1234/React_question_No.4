const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "Title is Required."],
    trim: true,
  },
  author: {
    type: String,
    require: true,
    trim: true,
  },
  content: {
    type: String,
    require: [true, "Content Required"],
    trim: true,
  },
  Date: {
    type: Date,
    default: Date.now(),
  },
});

module.export = mongoose.model("Posts", PostSchema);
