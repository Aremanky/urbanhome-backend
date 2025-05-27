const express = require('express');
const sequelize = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Intentamos conectar a la base de datos
sequelize.authenticate()
  .then(() => {
    console.log('✅ Conexión a la base de datos establecida');

    app.get('/', (req, res) => {
      res.send('¡Servidor URBANHOME y base de datos OK! 🚀');
    });

    app.listen(PORT, () => {
      console.log(`Servidor arrancado en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ No se pudo conectar a la base de datos:', err);
    process.exit(1);
  });
