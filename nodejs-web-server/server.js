const http = require('http');


// Custom callback - Untuk menangani dan menanggapi sebuah request
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');

    response.statusCode = 200;
    response.end('<h1>Halo HTTP Server!</h1>');
};

// Membuat HTTP server.
// Menerima satu buah parameter custom callback yang digunakan sebagai request listener.
    // Di dalamm request listener ini berisi logika yang kita tuliskan untuk menangani dan menanggapi sebuah request
const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

// Menggunakan method listen() agar server selalu tersedia untuk menangani permintaan yang masuk.
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});