const mongoose = require("mongoose");
const wishlistSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
const Wishlist = mongoose.model("Wishlist", wishlistSchema);
module.exports = Wishlist;
