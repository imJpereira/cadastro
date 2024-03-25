const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

//HOME
route.get('/', homeController.index);

//LOGIN
route.get('/login', loginController.index);
route.post('/login/sign-up', loginController.signUp);

module.exports = route;