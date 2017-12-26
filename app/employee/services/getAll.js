const { employee } = require('../model');
const { filterEmployees } = require('../../databaseFilters');

module.exports = getAll = (req, res) =>
  employee
    .find()
    .exec()
    .then(employees => res.send(filterEmployees(employees)));
