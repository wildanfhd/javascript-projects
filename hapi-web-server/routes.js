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
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        }
    }
];

module.exports = routes;