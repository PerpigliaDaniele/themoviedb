var express = require('express');


var filmController = require('./film.controller.js');


var films = express.Router();

films.get('/', filmController.getAll);
films.get('/:id', filmController.getOne);


module.exports = films;