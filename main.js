/*task 6*/
let user = 'John Doe';
const student = 'Irina';

console.log(user);
console.log(student);

user = student; /*Irina*/

console.log(user);

/*task 7*/
let test = 1;

test++; /*2*/
test = test + '1'; /*21*/

console.log(test);

test = test - 1; /*20*/

console.log(test);

test = Boolean(test);

console.log(test);

/*task 8*/
const arr = [2, 3, 5, 8];
let result = 1;

for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
}

console.log(result);

//task 9
const arr9 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < arr9.length; i++) {
    if (arr9[i] > 5 && arr9[i] < 10) {
        console.log(arr9[i]);
    }
}

//task 16.5
function polyndrome (poly) {
  for (let i = 0; i <= poly.length; i++) {
    if (poly[i] !== poly[poly.length - (i + 1)]) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(polyndrome('шалаш'));
console.log(polyndrome('ирина'));


//task 16.6
//     console.log(max(num5, num10));
//
//     const minmax = (num5 > num10) ? num10 : num5;

//task 16.7
const arr167 = [5, 20, 54, 26, 70, 60, 0, 56, 0, 100];

const zero = function (array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 10 === 0 && array[i] !== 0) {
      const y = array[i] / 10;
      array[i] = y + 'zero';
    } else if (array[i] % 100 === 0 && array[i] !== 0 ) {
      const n = array[i] / 100;
      array[i] = n + 'zero' + 'zero';
    } else if (array[i] === 0) {
      array[i] = 'zero';
    } else {
      array[i];
    }
  }
  return array;
};

zero(arr167);
console.log(arr167);