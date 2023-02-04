// primitivos - copiados pelo valor

let price1 = 20.99;
let price2 = 20.99;
// console.log(price1 === price2); // true

let name1 = 'Matheus';
let name2 = 'Matheus';
// console.log(name1 === name2); // true

let price3 = price1;
// console.log(price1 === price3); // true

// Não primitivos - copiados pela referência

const book1 = {
  author: 'Charlotte Bronte',
}
const book2 = book1; // <- copiou a referencia de onde o valor está na memória

book1.author = 'Jane Austin';
book2.title = 'Expresso do oriente';

// console.log(book1);
// console.log(book2);
// console.log(book1 === book2); // true

const students = ['André', 'João', 'Vitor'];
const ironhackers = students;
// students.pop();
// console.log(students === ironhackers); // true

const book3 = {
  author: 'Charlotte Bronte',
}
const book4 = {
  author: 'Charlotte Bronte',
}
// console.log(book3 === book4);

const students2 = ['André', 'João', 'Vitor'];
const students3 = ['André', 'João', 'Vitor'];
// console.log(students2 === students3);
// console.log([] === []);

// COPIANDO UM OBJETO
// Object.assign(); Shallow copy

const book5 = {
  author: 'J. R. R. Tolkien',
  publishers:  [
    {companyName: 'AB'},
    {companyName: 'CD'}
  ]
}

const book6 = Object.assign({}, book5);
// book6.title = 'O senhor dos anéis';
book5.publishers[0] = { companyName: 'Editora com um nome super legal!'}
// console.log(book5);
// console.log(book6);
// console.log(book5 === book6);

// deep copy
const book7 = {
  author: 'J. K. Rowling',
  publishers: {
    company1: {companyName: 'AB'},
    company2: {companyName: 'CD'},
  },
  title: 'HP',
}
// const book8 = {}; // inicializando um objeto novo

function cloneObject(obj) {
  let clone = {};
  for (let prop in obj) {
    if (obj[prop] != null && typeof obj[prop] === 'object') {
      clone[prop] = cloneObject(obj[prop]); // recursividade
    } else {
      clone[prop] = obj[prop];
    }
  }
  return clone;
}

// const book8 = cloneObject(book7);
// book8.publishers.company1 = { companyName: 'Outra Editora' }
// console.log(book7);
// console.log(book8);
// console.log(book7 === book8);

// JSON

const book8 = JSON.parse(JSON.stringify(book5));
book8.publishers[0] = {companyName: 'Editora sem Herros Hortográficos'}
// console.log(book5);
// console.log(book8);

// spread operator // shallow copy
const book9 = {...book5}
book9.publishers[1] = {companyName: 'Editora sem Herros Hortográficos'}
// console.log(book5);
// console.log(book9);

// COPIANDO UM ARRAY
// console.log(students);
// const studentsCopy = [...students];
// const studentsCopy = students.slice();
// const studentsCopy = students.map(item => item);
// const studentsCopy = [].concat(students);

// const studentsCopy = [];
// for (let i = 0; i < students.length; i += 1){
//   studentsCopy[i] = students[i];
// }

const matrix = [
  ['maçã', 'banana', 'goiaba'],
  [1, 2, 3]
]

function cloneArray (arr) {
  const arrCopy = [];
  for (let i = 0; i < arr.length; i += 1){
    arrCopy[i] = arr[i];
  }
  return arr;
}
// const studentsCopy = cloneArray(students);

// studentsCopy.push('Hercules')
const studentsCopy = ['Natalia', ...students, 'Hercules'];
// console.log(studentsCopy);
// console.log(students === studentsCopy);

// const matrix1 = cloneArray(matrix);
// matrix1[0][1] = 100;
// console.log(matrix)
// console.log(matrix1)
// console.log(matrix === matrix1)

// ADICIONANDO AO ARRAY

// métodos que alteram um array (mutáveis)
// .push()
// .unshift()

// métodos não mutáveis
// .concat()
// ... (spread operator)

// REMOVENDO DO ARRAY

// métodos mutáveis
// .pop()
// .shift()
// .splice(índiceInicial, quantidade [, algo para adicionar]?)

// métodos imutáveis
// .slice(índiceInicial?, índiceFinal?)
// .filter((item, i) => i !== 2)


// mutabilidade de objetos
const theSameBook = {...book1, pages: 400, title: 'Sherlock Holmes'};
// console.log(book1);
// console.log(theSameBook);
// console.log(book1 === theSameBook);

// desestruturar
const oldBook = {
  author: 'Charlotte Bronte',
  pages: 400,
  publishers: [
    { name: 'publisher 1' },
    { name: 'publisher 2' }
  ]
}

const { author, pages, ...resto } = oldBook;
// const author = oldBook.author;
// const pages = oldBook.pages;
// const resto = { publishers: oldBook.publishers }
console.log(oldBook);
console.log(author);
console.log(resto);


