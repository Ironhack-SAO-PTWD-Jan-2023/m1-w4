// síncrono
/*
1. preparar algo pra comer.
2. lavar a louça.
3. organizar o quarto.
4. ligar pra alguém.
*/

// assíncrono
/*
- pedir algo pra comer
- enquanto lavo a louça
- organizar o quarto
- enquanto ligo pra alguém
- comida chega
*/

// síncrono
function getFirstElementOfArray (arr) {
  return arr[0];
}

const campiArr = ['Madrid', 'Barcelona', 'Miami'];
const firstElement = getFirstElementOfArray(campiArr);

console.log(firstElement);

// assíncrono
function readFile(file) {
  // read the file
  // const contentFile = fs.read(file);
  // return contentFile.length;
}

const textSize = readFile('odyssey.txt');
console.log(textSize);

// Callbacks

// setTimeout
// const timeoutId = setTimeout(callbackFunction, delay);
// clearTimeout(timeoutId);

function someCallbackFunction () {
  console.log('Oi, pessoal!');
}

// const timeoutId = setTimeout(someCallbackFunction, 2000);
// clearTimeout(timeoutId);

// ES6
const timeoutId2 = setTimeout(() => {
  console.log('Olá, pessoal!')
}, 5000)

// setInterval
// const intervalId = setInterval(callbackFunction, interval);
// clearInterval(intervalId);

let counter = 1;
let timeoutId;

function callbackFunc () {
  console.log(counter);
  timeoutId = setTimeout(() => {
    counter += 1;
    callbackFunc();
    if (counter > 10) {
      clearTimeout(timeoutId);
    }
  }, 1000);
}
// callbackFunc();

let i = 1;
const intervalId = setInterval(() => {
  // console.log('i:', i);
  i += 1;
  if (i > 10) clearInterval(intervalId);
}, 1000)


// const text1 = func1();
// const text2 = asyncFunc(text1);
// const text3 = func2(text2);

function func1 () {
  return 'texto da função 1';
}

function func2 (text) {
  return `O texto era: "${text}"`;
}

function asyncFunc (text) {
  let message;
  setTimeout(() => message = `assíncrono: ${text}`, 2000)
  return message;
}

const text1 = func1();
const text2 = asyncFunc(text1);
const text3 = func2(text2);
console.log(text3);