const express = require('express');
const router = express.Router();
const ServiceController = require('../controllers/ServiceController');

// Ruta para obtener todos los libros
router.get('/services', ServiceController.getAllServices);

// Ruta para obtener un libro por ID
router.get('/services/:id', ServiceController.getServiceById);

// Ruta para crear un nuevo libro
router.post('/services', ServiceController.createService);

// Ruta para actualizar un libro por ID
router.put('/services/:id', ServiceController.updateService);

// Ruta para eliminar un libro por ID
router.delete('/services/:id', ServiceController.deleteService);

module.exports = router;
