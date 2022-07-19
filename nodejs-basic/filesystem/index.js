const fs = require('fs');
const path = require('path');


const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca file/berkas');
        return;
    } 
    console.log(data);
}

const notePath = path.resolve(__dirname, 'note.txt');
fs.readFile(notePath, 'utf8', fileReadCallback);