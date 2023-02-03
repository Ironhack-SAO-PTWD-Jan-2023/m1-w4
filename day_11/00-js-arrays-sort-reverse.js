// .sort()
const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

numbers.sort();
// console.log(numbers);

function compare(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  if (a === b) return 0;
}

// numbers.sort((a, b) => {
//   if (a < b) return -1; // mantenha a ordem relativa desses dois elementos
//   if (a > b) return 1; // inverta a ordem relativa desses dois elementos
//   if (a === b) return 0; // mantenha a ordem relativa
// });
// console.log(numbers);

numbers.sort((a, b) => a - b);
// console.log(numbers);

const words = [
  "Hello",
  "Goodbye",
  "AA",
  "First",
  "a",
  "A",
  "Second",
  "b",
  "Third",
];

words.sort((a, b) => a.localeCompare(b));
words.reverse();
console.log(words);

words.sort((a, b) => b.length - a.length);

console.log(words);

const users = [
  { name: "Hercules", age: 42 },
  { name: "André", age: 36 },
  { name: "Bruno", age: 31 },
  { name: 'João', age: 25 },
  { name: 'João', age: 23 }
];

// users.sort((a, b) => {
//   const orderByName = a.name.localeCompare(b.name)
//   if (orderByName === 0) {
//     return a.age - b.age;
//   }
//   return orderByName;
// });
users.sort((a, b) => a.age - b.age)
  .sort((a, b) => a.name.localeCompare(b.name))
  .reverse();
console.log(users);