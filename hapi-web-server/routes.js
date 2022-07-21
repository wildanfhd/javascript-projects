// File yang berisi route untuk routing
// terdiri dari method(GET, POST, PUT, DELETE), path('/', '/about'), dan handler
const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        }
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        }
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About Page';
        }
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut'
        }
    },
    {
        method: 'GET',
        path: '/hello/{name?}', // Optional Path parameter {name?} : Jika client tidak menetapkan path parameter maka name akan bernilai stranger (default value)
        handler: (request, h) => {
            // {name?} merupakan parameter untuk path yang diisi oleh Client
            // parameter path tersebut nanti akan disimpan sebagai properti pada request.params.
            // untuk mengakses propertinya, kita gunakan object destructuring.
            const { name = "stranger" } = request.params;
            return `Hello, ${name}`;
        }
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        }
    }
];

module.exports = routes;