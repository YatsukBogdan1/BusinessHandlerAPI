const { authentication } = require('./employee/model');

const getTokenFromString = string => string.substr(7);

module.exports = tokenValidation = (req, res, next) => {
  const { headers: { authorization } } = req;
  if (!authorization)
    return res
      .status(400)
      .send({ error: 'Authorization header field required' });
  authentication
    .findOne({ access_token: getTokenFromString(authorization) })
    .then(instance => {
      if (!instance)
        return res.status(401).send({ error: 'Access token not valid' });

      const date = new Date();
      const expire_at = new Date(instance.expire_at);
      if (date > expire_at)
        return res.status(401).send({ error: 'Access token expired' });
      req.access_granted = true;
      next();
    });
};
