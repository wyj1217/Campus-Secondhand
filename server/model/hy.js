const mongoose = require("../db/db");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  content: String,
  img: String,
  price: Number,
  headimg: String,
});

// 导出模型
const bookModel = mongoose.model("book", bookSchema, "book");

module.exports = {
  bookModel,
};
