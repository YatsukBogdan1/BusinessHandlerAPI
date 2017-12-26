const filterEmployee = employee => ({
  id: employee._id,
  name: employee.name,
  surname: employee.surname,
  birthday: employee.birthday,
  email: employee.email,
  phone_number: employee.phone_number,
  country: employee.country,
  city: employee.city,
  street: employee.street
});

const filterEmployees = employees => employees.map(filterEmployee);

module.exports = {
  filterEmployee,
  filterEmployees
};
