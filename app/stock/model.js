const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StockSchema = new Schema({
  title: String,
  products: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: 'products'
      },
      amount: Number
    }
  ]
});

const Stock = mongoose.model('stock', StockSchema);

module.exports = Stock;
