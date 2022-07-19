/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

// Import module fs dan path
const fs = require('fs');
const path = require('path');

// Mendeklarasikan path tujuan
const inputPath = path.resolve(__dirname, 'input.txt');
const outputPath = path.resolve(__dirname, 'otherOutput.txt')

const readableStream = fs.createReadStream(inputPath, {
    highWaterMark: 15 // Menentukan buffer
});

// Menentukan path tujuan, agar file yang akan di write nanti akan berada pada path tujuan tersebut
const writableStream = fs.createWriteStream(outputPath);

// Karena createReadStream() mengembalikan EventEmitter, kita dapat menetapkan fungsi listener setiap kali event readable dibangkitkan.
readableStream.on('readable', () => {
    try {
        writableStream.write(`${readableStream.read()}\n`);
    } catch(error) {

    }
});

readableStream.on('end', () => {
    console.log('File berhasil dibuat!');
})