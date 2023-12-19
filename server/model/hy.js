const mongoose = require("./db");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  img: Array,
  price: Number,
});

// 导出模型
const bookModel = mongoose.model("book", bookSchema, "book");

module.exports = {
  bookModel,
};
