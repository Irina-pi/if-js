//Lesson 16
//task 16.5
let str = 'шалаш';
let str2 = 'Ирина';
const  polyndrome = function (poly) {
    let res = false;
    for (let i = 0; i <= poly.length; i++) {
        if (poly[i] !== poly[poly.length - (i + 1)]) {
            res = false;
            break;
        } else
            res = true;
    }
    return res;
};

console.log(polyndrome(str));
console.log(polyndrome(str2));

//task 16.6
let x = 5;
let z = 10;
const min = function (a, b) {
    if (a > b) {
        return b;
    }
    return a;
};

console.log(min(x, z));

const max = function (a, y) {
    if (a < y) {
        return y;
    }
    return a;
};

console.log(max(x, z));

const min2 = (x > z) ? z : x;

console.log(min2);

//task 16.7
let arr167 = [5, 20, 54, 26, 70, 60, 0, 56, 0, 100];
let y;

const zero = function (array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 10 === 0 && array[i] !== 0) {
            y = array[i] / 10;
            array[i] = y + 'zero';
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