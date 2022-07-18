// CommonJS
const { EventEmitter } = require('events');
// ES6
// import EventEmitter from 'events';

const newEmitter = new EventEmitter();

// Using destructuring Object to obtain the single value
const carSearch = ({ brand, type}) => {
    console.log(`Car with the ${brand} brand and type ${type}`);
}

const buyCar = ({ price }) => {
    console.log(`You bought the car for ${price}!`);
}

newEmitter.on('car-search', carSearch);
newEmitter.on('car-search', buyCar);

// Karena parameter fungsi carSearch dan buyCar menggunakan destructuring object, pada saat ingin kita isi dengan argumen, maka gunakan tanda {} yang menandakan bahwa itu telah didestrukturisasi.
newEmitter.emit('car-search', {brand: 'BMW', type: 'Racing', price: 10000000});


// USING Handler or Listener
