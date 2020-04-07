const mongoose = require("mongoose");

const book = new Schema({
  title: { type: String, required: false },
  subtitle: { type: String },
  author: { type: String, required: false },
  googleId: { type: String, required: true, unique: true }
});


module.exports = Book;
