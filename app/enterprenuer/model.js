const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EnterprenuerSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  surname: String,
  birthday: Date,
  phone_number: String,
  street: String,
  country: {
    type: Schema.Types.ObjectId,
    ref: 'countries'
  },
  city: {
    type: Schema.Types.ObjectId,
    ref: 'cities'
  }
});

const Enterprenuer = mongoose.model('enterprenuer', EnterprenuerSchema);

module.exports = Enterprenuer;
