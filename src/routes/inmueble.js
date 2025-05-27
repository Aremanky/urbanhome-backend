const express = require('express');
const router = express.Router();
const inmuebleController = require('../controllers/inmuebleController');
const auth = require('../middleware/auth');

// Rutas públicas
router.get('/', inmuebleController.listar);
router.get('/:id', inmuebleController.detalle);

// Rutas protegidas (admin)
router.post('/', auth, inmuebleController.crear);
router.put('/:id', auth, inmuebleController.editar);
router.delete('/:id', auth, inmuebleController.borrar);

module.exports = router;
