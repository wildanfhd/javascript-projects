// SYNCHRONOUS

// const getUserSync = id => {
//     let nama = id === 1 ? 'Jamal' :  'Udin';

//     return {id, nama};
// }

// const userSatu = getUserSync(1);
// console.log(userSatu);

// const userDua = getUserSync(2);
// console.log(userDua);

// const sayHello = 'Hola';
// console.log(sayHello); 



// ASYNCHRONOUS
const getUser = (id, callback) => {
    const time = id === 1 ? 3000 : 2000;
    setTimeout(() => {
        const nama = id === 1 ? 'Jennie' : 'Seulgi';
        callback({id, nama});
    }, time)
}


const userSatu = getUser(1, (hasil) => {
    console.log(hasil);
})

const userDua = getUser(2, (hasil) => {
    console.log(hasil);
})

const sayIt = 'Hello world';
console.log(sayIt);

