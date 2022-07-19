const fs = require('fs');

const writableStream = fs.createWriteStream('./nodejs-basic/stream/outputSt.txt');
writableStream.write('Ini adalah baris pertama!\n');
writableStream.write('Ini adalah baris kedua!\n');
writableStream.end('Akhir dari contoh writable stream');