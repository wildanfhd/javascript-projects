const fs = require('fs');
const path = require('path')

const notePath = path.resolve(__dirname, 'input.txt')
console.log(notePath);

const readableStream = fs.createReadStream(notePath, { 
    highWaterMark: 10
});

readableStream.on('readable', () => {
    try {
        process.stdout.write(`${readableStream.read()}`);
    } catch(error) {

    }
});

readableStream.on('end', () => {
    console.log('Done');
})

// readableStream.emit('readable');