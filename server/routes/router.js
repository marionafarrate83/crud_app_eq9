const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');

//metodos GET

route.get('/', services.homeRoutes);
route.get('/tipoDino', services.homeRoutesTipo);

route.get('/add-user',services.add_user);

route.get('/update-user',services.update_user);

// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);
route.get('/api/tipodino', controller.findTipo);

//exportar el modulo rutas
module.exports = route