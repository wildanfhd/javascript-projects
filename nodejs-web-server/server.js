const http = require('http');


// Custom callback - Untuk menangani dan menanggapi sebuah request
const requestListener = (request, response) => {
    // Menetapkan dan Menambahkan Header
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('X-Powered-By', 'NodeJS');
    

    // MEnggunakan Destructuring Object untuk mendapatkan nilai method (GET, POST, PUT, DELETE) dan
    //  nilai url dari setiap request.
    const { method, url } = request;

    // Routing Request
    if(url === '/') {

        // GET method
        if(method === 'GET') {
            response.statusCode = 200;
            response.end('<h1>Ini adalah homepage</h1>');
        } else { //Selain GET method
            response.statusCode = 400;
            response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);
        }
    } else if(url === '/about') {
        // (/about) GET method
        if(method === 'GET') {
            response.statusCode = 200;
            response.end('<h1>Hola, ini adalah halaman about!</h1>');
        } else if(method === 'POST') { // (/about) POST method
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
                response.statusCode = 200;
                response.end(`<h1>Hola, ${name}! ini adalah halaman about</h1>`);
            })
        } else { // (/about) selain GET dan POST method
            response.statusCode = 400;
            response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`)
        }
    } else { // Selain url = / atau /about
        response.statusCode = 404;
        response.end("<h1>Halaman tidak ditemukan!</h1>");
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