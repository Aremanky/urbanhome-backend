const jwt = require('jsonwebtoken');
require('dotenv').config();

// Cargamos las credenciales de entorno
const admins = [
  { user: process.env.ADMIN1_USER, pass: process.env.ADMIN1_PASS },
  { user: process.env.ADMIN2_USER, pass: process.env.ADMIN2_PASS },
];

exports.login = (req, res) => {
  const { username, password } = req.body;
  const admin = admins.find(a => a.user === username && a.pass === password);
  if (!admin) {
    return res.status(401).json({ error: 'Credenciales inválidas' });
  }
  // Generamos token con payload mínimo
  const token = jwt.sign(
    { user: admin.user },
    process.env.JWT_SECRET,
    { expiresIn: '8h' }
  );
  res.json({ token });
};
