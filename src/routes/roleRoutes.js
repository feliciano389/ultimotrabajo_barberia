const express = require('express');
const router = express.Router();
const RoleController = require('../controllers/RoleController');

// Ruta para obtener todos los roles
router.get('/roles', RoleController.getAllRoles);

// Ruta para obtener un rol por ID
router.get('/roles/:id', RoleController.getRoleById);

// Ruta para crear un nuevo rol
router.post('/roles', RoleController.createRole);

// Ruta para actualizar un rol por ID
router.put('/roles/:id', RoleController.updateRole);

// Ruta para eliminar un rol por ID
router.delete('/roles/:id', RoleController.deleteRole);

module.exports = router;
