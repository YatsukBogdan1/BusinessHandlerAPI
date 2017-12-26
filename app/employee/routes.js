const router = require('express').Router();

const tokenValidation = require('../tokenValidation');
const services = require('./services');

router.get('/', tokenValidation, services.getAll);
router.get('/:id', tokenValidation, services.getById);

router.post('/auth', services.authentication);

module.exports = router;
