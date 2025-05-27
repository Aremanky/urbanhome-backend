const Inmueble = require('../models/inmueble');
const { Op } = require('sequelize');


// Listar inmuebles (con filtros opcionales por tipo o zona)
exports.listar = async (req, res) => {
  try {
    const { tipo, direccion } = req.query;
    const where = {};
    if (tipo) where.tipo = tipo;
    if (direccion) where.direccion = { [Op.iLike]: `%${direccion}%` };
    const inmuebles = await Inmueble.findAll({ where });
    res.json(inmuebles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al listar inmuebles' });
  }
};

// Obtener detalle de un inmueble
exports.detalle = async (req, res) => {
  try {
    const inmueble = await Inmueble.findByPk(req.params.id);
    if (!inmueble) return res.status(404).json({ error: 'No encontrado' });
    res.json(inmueble);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener detalle' });
  }
};

// Crear un nuevo inmueble (admin)
exports.crear = async (req, res) => {
  try {
    const nuevo = await Inmueble.create(req.body);
    res.status(201).json(nuevo);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Error al crear inmueble' });
  }
};

// Editar un inmueble existente (admin)
exports.editar = async (req, res) => {
  try {
    const [updated] = await Inmueble.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) return res.status(404).json({ error: 'No encontrado' });
    const inmuebleActualizado = await Inmueble.findByPk(req.params.id);
    res.json(inmuebleActualizado);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Error al editar inmueble' });
  }
};

// Borrar un inmueble (admin)
exports.borrar = async (req, res) => {
  try {
    const deleted = await Inmueble.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'No encontrado' });
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al borrar inmueble' });
  }
};
