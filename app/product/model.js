const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: String,
  full_title: {
    type: String,
    required: true
  },
  retail_price: Number,
  purchase_price: Number,
  currency: {
    type: Schema.Types.ObjectId,
    ref: 'currencies'
  }
});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;
