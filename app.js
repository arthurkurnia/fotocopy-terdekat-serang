const express = require('express');
const path = require('path');
const app = express();

const config = {
    name: "Fotocopy Terdekat",
    domain: "www.shaning.id",
    whatsapp: "628xxxxxxxxxx",
    instagram: "@shaning.id",
    address: "Cipare, Kota Serang, Banten",
    logoPath: "/logo/logo.png"
};

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { config });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});