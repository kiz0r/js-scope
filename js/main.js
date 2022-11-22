// Змініть приклад із заняття по замиканню (counter) так, щоб при кожному виклику значення лічильника змінювалося не на 1, а на передане користувачем число (передати його при виклику зовнішньої функції customCounter).
function customCounter1(step) {
  let i = 0;
  return function () {
    return (i += step);
  };
}

const myCounter1 = customCounter1(5);
const result1_1 = myCounter1();
const result1_2 = myCounter1();
const result1_3 = myCounter1();

console.group(`FIRST METHOD.
              Counter output : `);
console.log('first call  : ', result1_1);
console.log('second call : ', result1_2);
console.log('third call  : ', result1_3);
console.groupEnd();

// Змініть приклад із заняття по замиканню (counter) так, щоб користувач задавав початкове значення лічильника (у прикладі із заняття це 0) і крок зміни лічильника (у прикладі із заняття це 1).
function customCounter2(startPoint, step) {
  return function () {
    return (startPoint += step);
  };
}

const myCounter2 = customCounter2(1, 5);
const result2_1 = myCounter2();
const result2_2 = myCounter2();
const result2_3 = myCounter2();

console.group(`SECOND METHOD.
              Counter output : `);
console.log('first call  : ', result2_1);
console.log('second call : ', result2_2);
console.log('third call  : ', result2_3);
console.groupEnd();
