// read file with Asynchronous way :

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


// Read file with Synchronous Way - Karena dijalankan secara synchronous, maka akan dicetak pertama atau lebih dulu.
const syncNotePath = path.resolve(__dirname, 'syncNote.txt');
const syncData = fs.readFileSync(syncNotePath, 'utf-8');
console.log(syncData);