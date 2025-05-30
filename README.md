# urbanhome-backend

# URBANHOME Backend

Este repositorio contiene el backend de la aplicación URBANHOME, desarrollado con Node.js, Express y PostgreSQL.

## 🏗️ Estructura del proyecto

```
urbanhome-backend/
├── src/
│   ├── config/
│   │   └── db.js                # Configuración de Sequelize y conexión a la BD
│   ├── controllers/
│   │   ├── authController.js    # Lógica de autenticación y emisión de JWT
│   │   └── inmuebleController.js# CRUD de Inmuebles
│   ├── models/
│   │   └── inmueble.js          # Definición del modelo Inmueble
│   ├── routes/
│   │   ├── auth.js              # Ruta /api/auth/login
│   │   └── inmueble.js          # Rutas /api/inmuebles
│   └── index.js                 # Punto de entrada y montaje de rutas
├── .env.example                 # Variables de entorno de ejemplo
├── .gitignore                   # Exclusiones de Git
├── package.json                 # Dependencias y scripts
└── README.md                    # Este archivo
```

## 🚀 Instalación y arranque

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/Aremanky/urbanhome-backend.git
   cd urbanhome-backend
   ```
2. Instalar dependencias:

   ```bash
   npm install
   ```
3. Crear un fichero `.env` en la raíz copiando `.env.example` y rellenar:

   ```dotenv
   PORT=3000
   DATABASE_URL=postgres://postgres:TU_PASS@localhost:5432/urbanhome
   JWT_SECRET=tu_secreto_jwt
   GOOGLE_MAPS_KEY=tu_google_maps_key
   ADMIN1_USER=admin1
   ADMIN1_PASS=Pass1234
   ADMIN2_USER=admin2
   ADMIN2_PASS=Pass5678
   ```
4. Crear la base de datos PostgreSQL:

   ```sql
   CREATE DATABASE urbanhome;
   ```
5. Arrancar en modo desarrollo:

   ```bash
   npm run dev
   ```
6. Acceder a `http://localhost:3000/` para comprobar que responde.

## 📑 Descripción de endpoints

### Autenticación

* `POST /api/auth/login`

  * Body JSON:

    ```json
    { "username": "admin1", "password": "Pass1234" }
    ```
  * Respuesta:

    ```json
    { "token": "<JWT>" }
    ```

### Inmuebles

* `GET /api/inmuebles`

  * Devuelve listado de inmuebles.
* `GET /api/inmuebles/:id`

  * Devuelve detalle de un inmueble.
* `POST /api/inmuebles` (admin)

  * Header: `Authorization: Bearer <token>`
  * Body: campos de inmueble (título, dirección, precio, baños, habitaciones, garage, terraza, tipo, metros, descripción, media\_urls).
* `PUT /api/inmuebles/:id` (admin)
* `DELETE /api/inmuebles/:id` (admin)

## 🧪 Pruebas básicas con Jest + Supertest

1. Instalar dependencias de test:

   ```bash
   npm install --save-dev jest supertest
   ```
2. Añadir script en `package.json`:

   ```jsonc
   "scripts": {
     "test": "jest"
   }
   ```
3. Crear carpeta `tests/` con archivos como `auth.test.js` e `inmueble.test.js`.
4. En cada test usar Supertest para hacer peticiones a `app` exportada desde `src/index.js`.
5. Ejecutar:

   ```bash
   npm test
   ```

## 👏 Buenas prácticas

* Importar siempre `{ Op } = require('sequelize')` si usas operadores.
* Mantener la carpeta `models/`, `controllers/` y `routes/` separadas.
* No subir el archivo `.env` al repositorio.
* Escribir tests para cubrir rutas críticas.
