const { employee } = require('../model');
const { isValid } = require('mongoose').Types.ObjectId;
const { filterEmployee } = require('../../databaseFilters');

module.exports = getById = ({ params: { id } }, res) => {
  if (!isValid(id))
    return res.status(400).send({ error: `${id} is not valid ObjectID` });
  employee
    .findOne({ _id: id })
    .exec()
    .then(employee => {
      if (!employee)
        return res.status(404).send({ error: 'Employee not found' });
      res.send(filterEmployee(employee));
    });
};
