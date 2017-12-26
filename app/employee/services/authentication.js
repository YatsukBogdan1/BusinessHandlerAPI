const { employee, authentication } = require('../model');
const uuid = require('uuid/v4');

const authenticate = ({ body: { username, password } }, res) => {
  if (!username) return res.status(400).send({ error: 'Username required' });
  if (!password) return res.status(400).send({ error: 'Password required' });
  employee
    .findOne({ username: username })
    .exec()
    .then(user => {
      if (!user) return res.status(404).send({ error: 'User not found' });
      if (password !== user.password)
        return res.status(404).send({ error: 'Wrong password' });

      const _authenticationPayload = {
        ...authenticationPayload(),
        employee: user._id
      };
      new authentication(_authenticationPayload).save();
      return res.send(_authenticationPayload);
    });
};

const authenticationPayload = () => {
  const expire_at = new Date();
  expire_at.setDate(expire_at.getDate() + 1);
  return {
    access_token: uuid(),
    refresh_token: uuid(),
    expire_at
  };
};

module.exports = authenticate;
