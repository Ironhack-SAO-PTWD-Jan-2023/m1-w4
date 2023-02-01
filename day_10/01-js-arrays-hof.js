// High Order Functions

// .map()
// transforma todos os valores e os devolve em um novo array

/*
[ x1, x2, x3, x4, x5 ]  <- array original
  f   f   f   f   f     função
[ y1, y2, y3, y4, y5 ]  <- novo array como resposta
*/

const numbers = [1, 2, 3, 4, 5, 6, 7];
const numbersCopy = numbers.map(item => item); // cópia rasa | shallow copy

const newNumbers = numbers.map(item => item * 2);

// console.log(numbersCopy);
// console.log(newNumbers);

const foods = ['pizza', 'hamburger', 'donuts', 'batata frita', 'pizza'];

const upFoods = foods.map(food => food.toUpperCase());
// console.log(foods);
// console.log(upFoods);

// .reduce()
// transforma uma lista em um único valor

const total = numbers.reduce((acumulador, valorAtual) => acumulador * valorAtual, 1);

const foodsObj = foods.reduce((acc, value) => ({...acc, [value.toUpperCase()]: value}), {});

// console.log(numbers)
// console.log(total)
// console.log(foodsObj);

const people = [
  {name: 'Candice', age: 25},
  {name: 'Tammy', age: 30},
  {name: 'Allen', age: 49},
  {name: 'Nettie', age: 21},
  {name: 'Stuart', age: 17},
]

const totalAge = people.reduce((acc, value) => acc + value.age, 0);

// console.log(totalAge);

// usando .forEach()
// let totalAgeFE = 0;
// people.forEach(person => totalAgeFE += person.age);

// .filter()
// cria um novo array só com os elementos que passarem no filtro

const evenNumbers = numbers.filter(item => item % 2 === 0)

console.log(evenNumbers);

const shortFoods = foods.filter(food => food.length <= 6);
console.log(shortFoods);

const legalAgePeople = people.filter(person => person.age >= 18);
console.log(legalAgePeople);

// console.log(foods.includes('pizz'));
