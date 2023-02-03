// try { // tente fazer
//   // isso daqui
// } catch (error) { // não conseguiu
//   // faz isso daqui
// } finally { // dando certo ou não
//   // faça essa última coisa
// }

function powerOfThree (num) {
  return num ** 3;
}

// try {
//   console.log('try - é executado primeiro.');
//   powerOfThree(9);
//   console.log('fim do try');
// } catch (error) {
//   console.log('catch - é executado se houver erro.');
//   console.log('error ->>>', error);
// } finally {
//   console.log('finally - é executado no fim de tudo');
// }

// throw an error

function getUserName (user) {
  if (!user.name) {
    throw new Error('dados incompletos: falta "name".');
  };
  return user.name;
}

try {
  const userName = getUserName({name: 'Lucas', lastName: 'Padueli'});
  console.log(userName);
} catch (err) {
  console.log('ERROR >>>', err);
} finally {
  console.log('Finally!')
}
