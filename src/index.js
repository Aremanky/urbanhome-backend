const express = require('express');
const sequelize = require('./config/db');
require('dotenv').config();

const inmuebleRoutes = require('./routes/inmueble');
const authRoutes = require('./routes/auth');
// TODO: agregar authRoutes cuando esté implementado

const app = express();
app.use(express.json());

// Montar rutas
app.use('/api/inmuebles', inmuebleRoutes);


// Prueba de conexión y arranque
sequelize.authenticate()
  .then(() => sequelize.sync())
  .then(() => {
    console.log('✅ DB OK, modelos sincronizados');
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Servidor en http://localhost:${process.env.PORT || 3000}`);
    });
  })
  .catch(err => {
    console.error('Error al iniciar la app:', err);
    process.exit(1);
  });
