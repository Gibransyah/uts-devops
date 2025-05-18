const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 5000; // Gunakan port 5000

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint untuk login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Contoh validasi login statis
  if (username === 'admin' && password === 'admin123') {
    res.send('Login berhasil! Selamat datang, admin.');
  } else {
    res.send('Login gagal! Username atau password salah.');
  }
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
