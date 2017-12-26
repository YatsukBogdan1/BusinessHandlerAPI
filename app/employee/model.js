const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthenticationSchema = new Schema({
  access_token: String,
  refresh_token: String,
  expire_at: Date,
  employee: Schema.Types.ObjectId
});

const EmployeeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: String,
  birthday: Date,
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },

  email: String,
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

const employee = mongoose.model('employee', EmployeeSchema);
const authentication = mongoose.model('authentication', AuthenticationSchema);

module.exports = {
  employee,
  authentication
};
