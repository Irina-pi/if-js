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
let num5 = 5;
let num10 = 10;
const min = function (a, b) {
    if (a > b) {
        return b;
    }
    return a;
};

console.log(min(num5, num10));

const max = function (a, y) {
    if (a < y) {
        return y;
    }
    return a;
};

console.log(max(num5, num10));

const min2 = (num5 > num10) ? num10 : num5;

console.log(min2);

//task 16.7
let arr167 = [5, 20, 54, 26, 70, 60, 0, 56, 0, 1];
let arr167str = arr167.join(', ');
let x;
let y;

const zero = function () {
    for (let i = 0; i < arr167.length; i++) {
        x = arr167[i] % 10;
        if (x === 0 && arr167[i] !== 0) {
            y = arr167[i] / 10;
            console.log([y + 'zero']);
        } else if (arr167[i] === 0) {
            console.log(['zero']);
        } else {
            console.log([arr167[i]]);
        }
    }
};
zero (arr167str);