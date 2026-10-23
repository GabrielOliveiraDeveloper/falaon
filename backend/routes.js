const routes = require('express').Router();
const RegisterController = require('./RegisterController');
const DoneRegisterController = require('./DoneRegisterController');
const LoginController = require('./LoginController');

routes.post('/register', RegisterController);
routes.post('/doneRegister', DoneRegisterController);
routes.post('/login', LoginController);

module.exports = routes;