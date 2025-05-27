const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Inmueble = sequelize.define('Inmueble', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  geo_lat: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  geo_lng: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  baños: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  habitaciones: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  garage: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  terraza: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.ENUM('venta', 'alquiler', 'remodelacion'),
    allowNull: false,
  },
  metros: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  media_urls: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
  },
}, {
  timestamps: true,
  createdAt: 'creado_en',
  updatedAt: 'actualizado_en',
});

module.exports = Inmueble;
