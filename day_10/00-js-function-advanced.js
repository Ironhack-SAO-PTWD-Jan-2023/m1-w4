// função declarada normalmente
function calcSum(num1, num2) {
  return num1 + num2;
};

// função como expressão
const calcSumExp = function (num1, num2) {
  return num1 + num2
}

// função de seta | arrow function (depois do conteúdo lá de baixo!)
const calcSumArrow = (num1, num2) => num1 + num2;

// const myCalc = calcSum(1, 2);
// const myCalc2 = calcSumExp(1, 2);

// console.log(`O valor da soma foi ${myCalc}.`);
// console.log(`O valor da soma foi ${myCalc2}.`);

const welcomeMsg = function (msg) {
  console.log(msg);
}

// welcomeMsg('Bem vindo!');
// checkFunctionDeclaration();
// checkFunctionExpression();

// funciona com Hoisting
function checkFunctionDeclaration() {
  console.log('Funções declaradas');
}

// não funciona com Hoisting
const checkFunctionExpression = function () {
  console.log('Funções como expressão');
}

// HOIST -> GUINCHO -> IÇAR

// CALLBACKS

const eatDinner = function (callback) {
  setTimeout(function () {
    console.log('Comendo a janta!');
    callback();
  }, 2000);
}

const eatDessert = function () {
  console.log('Comendo a sobremesa!');
}

// console.log(eatDessert);

// eatDinner(eatDessert);
// eatDinner(function () {
//   console.log('outra função!')
// });
// eatDessert();

// FUNÇÕES ANÔNIMAS
function printName(name, cbFunc) { //cbFunc = callbackFunction
  cbFunc(name);
}

// printName('ANDRÉ', function (nome) {
//   console.log(`${nome[0].toUpperCase()}${nome.slice(1).toLowerCase()}`)
// })

function getLength (str, cbFunc) {
  cbFunc(str);
}

// getLength('Lucas', function (str) {
//   console.log(`"${str}" tem ${str.length} caracteres.`)
// })

// setTimeout(function () {
//   console.log('Eu sou uma função anônima dentro de um setTimeout!');
// }, 5000);

// Arrow Functions

// const greeting = function (name) {
//   console.log(`Olá, ${name}!`);
// }

// const greeting = (name) => {
//   console.log(`Olá, ${name}`);
// }

const greeting = name => console.log(`Olá, ${name}`);
const greetingAll = (aluno1, aluno2) => console.log(`Olá ${aluno1} e ${aluno2}`);

// greeting('Natalia');
// greetingAll('Natalia', 'João');

// ESCOPO e THIS.

const user = {
  name: 'Bruno',
  age: 31,
  getOlder: function () {
    setInterval(() => {
      this.age += 1;
      console.log(this.age);
    }, 1500);
  }
}

// user.getOlder();

// Arguments
function printSomething () {
  console.log('arguments length:', arguments.length);
  console.log('all:\t', arguments);
  console.log('1o:\t', arguments[0]);
  console.log('2o:\t', arguments[5]);
}

// printSomething('hi', 2, true, () => { console.log('aqui!')}, 'eita!', { name: 'Daniel' }, ['maçã', 'goiaba']);


function printArgs () {
  for(let i = 0; i < arguments.length; i += 1) {
    console.log(arguments[i]);
  }
}

// printArgs('hi', 2, true, () => { console.log('aqui!')}, 'eita!', { name: 'Daniel' }, ['maçã', 'goiaba']);

function useArgsAsArr () {
  const argsArr = Array.from(arguments);
  argsArr.forEach(item => console.log(item));
}

useArgsAsArr('hi', 2, true, function () { console.log('aqui!')}, 'eita!', { name: 'Daniel' }, ['maçã', 'goiaba']);

// (item) => { return item + 1 };
// item => item + 1;
