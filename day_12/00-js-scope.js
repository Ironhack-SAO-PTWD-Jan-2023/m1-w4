// Temos 3 escopos
// - global
// - função
// - bloco

// console.log(fruta); // içamento lá de baixo da linha 88!

// const message = 'Olá do escopo global!';

function sayHelloFromLocalScope() {
  const greeting = 'Olá do escopo de função!'
  return greeting;
};

// console.log(message);
// console.log(greeting); // <- ReferenceError

// let outerVar = 1;
// function inner() {
//   let innerVar = 2;
//   console.log(outerVar);
// }

// console.log(innerVar); // <- ReferenceError

// var message = 'Olá do escopo global!';
// var message = 'Segunda mensagem';

// console.log(message);

// var name = 'Ironhacker';
// if (true) {
//   var name = 'Ted';
  // console.log(`Nome dentro do bloco é ${name}`);
// }
// console.log(`Nome fora do bloco é ${name}`);

// var a = 1;
// console.log(window.a); // window é o escopo que só existe no navegador!

// let b = 2;
// console.log(window.b);

for (var i = 0; i <= 30; i += 1) {
  // console.log(`Iteração número ${i}`);
}

// console.log(`Depois do loop: ${i}`);

// var
var messageV = 'Olá do escopo global';
var messageV = 'redeclarando a variável';
messageV = 'reatribuindo para a variável';

var nameV = 'Ironhacker';
if (true) {
  var nameV = 'Ted';
  // console.log(`Nome dentro do bloco é ${nameV}`); // Ted
}
// console.log(`Nome fora do bloco é ${nameV}`); // Ted

// let
let messageL = 'Olá do escopo global';
// let messageL = 'redeclarando a variável'; // não posso redeclarar
messageL = 'reatribuindo para a variável';

let nameL = 'Ironhacker';
if (true) {
  let nameL = 'Ted';
  // console.log(`Nome dentro do bloco é ${nameL}`); // Ted
}
// console.log(`Nome fora do bloco é ${nameL}`); // Ironhacker

// const
const messageC = 'Olá do escopo global';
// const messageC = 'redeclarando a variável'; // não posso redeclarar
// messageC = 'reatribuindo para a variável'; // não posso reatribuir

const nameC = 'Ironhacker';
if (true) {
  const nameC = 'Ted';
  // console.log(`Nome dentro do bloco é ${nameC}`); // Ted
}
// console.log(`Nome fora do bloco é ${nameC}`); // Ironhacker

// Hoisting / Içamento
// var // function
var fruta = 'goiaba';
// console.log(fruta);

// Shadowing / Sombreamento
let a = 1;
let b = 2;

function inner () {
  a = 4;
  let b = 3;
}

inner();
console.log(a, b);