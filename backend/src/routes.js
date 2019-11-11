const express = require('express');

const UserController = require('./controllers/UserController');
const SubjectController = require('./controllers/SubjectController');
const EnrollController = require('./controllers/EnrollController');

const routes = express.Router();

//posts
routes.post('/user', UserController.store);
routes.post('/subject', SubjectController.store);
routes.post('/enroll', EnrollController.store);
routes.post('/aut', UserController.index);

//gets
routes.get('/subjects', SubjectController.show);
routes.get('/users', UserController.show);

module.exports = routes;