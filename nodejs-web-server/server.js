const http = require('http');


// Custom callback - Untuk menangani dan menanggapi sebuah request
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    // MEnggunakan Destructuring Object untuk mendapatkan nilai method (GET, POST, PUT, DELETE)
    const { method } = request;

    if(method === 'GET') {
        response.end('<h1>Halo HTTP Server!</h1>');
    }

    if(method === 'POST') {
        // Variabel untuk menampung buffer pada stream
        let body = [];

        request.on('data', (chunk) => {
            // Ketika event 'data' terjadi pada request, kita isi array body dengan chunk(potongan data) yang dibawa callback function tersebut.
            body.push(chunk);
        })

        request.on('end', () => {
            // ketika Proses stream berakhir, maka event 'end' akan terbangkitkan.
            // Kita mengubah variabel body yang sebelumnya menampung buffer menjadi data sebenarnya dalam bentuk string melalui perintah Buffer.concat(body).toString()
            body = Buffer.concat(body).toString();
            const { name } = JSON.parse(body);
            response.end(`<h1>Hola, ${name}!</h1>`);
        })
    }

};

// Membuat HTTP server.
// http.createServer() Menerima satu buah parameter custom callback yang digunakan sebagai request listener.
    // Di dalamm request listener ini berisi logika yang kita tuliskan untuk menangani dan menanggapi sebuah request
const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

// Menggunakan method listen() agar server selalu tersedia untuk menangani permintaan yang masuk.
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});