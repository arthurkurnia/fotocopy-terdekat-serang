const express = require('express');
const path = require('path');
const app = express();

// Konfigurasi Bisnis (Dapat disesuaikan jika perlu)
const config = {
    whatsapp: "6281382250692",
    instagram: "@shaning.id",
    address: "Jl. Terminal Bus A. Khatib, Cipare, Serang, Banten",
};

// Pengaturan view engine EJS
app.set('view engine', 'ejs');

// Memberitahu Express lokasi folder 'views' secara eksplisit agar terbaca oleh Vercel
app.set('views', path.join(__dirname, 'views'));

// Memberitahu Express lokasi folder 'public' untuk file statis (logo, karakter.png, dll)
app.use(express.static(path.join(__dirname, 'public')));

// Route utama untuk memuat halaman website
app.get('/', (req, res) => {
    try {
        // Render file index.ejs yang ada di folder views
        res.render('index', { config });
    } catch (error) {
        // Menampilkan pesan error jika file index.ejs tidak ditemukan atau bermasalah
        res.status(500).send("Terjadi kesalahan sistem: " + error.message);
    }
});

// WAJIB ADA: Export app untuk dijalankan sebagai Serverless Function di Vercel
module.exports = app;

// Menjalankan server pada port yang disediakan Vercel atau port 3000 jika lokal
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Website Fotocopy Terdekat berjalan di http://localhost:${PORT}`);
});
