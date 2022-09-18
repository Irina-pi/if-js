/*task 6*/
let user = 'John Doe';
let student = 'Irina';

console.log(user);
console.log(student);

user = student; /*Irina*/

console.log(user);

/*task 7*/
let test = 1;

test++; /*2*/
test = test + '1'; /*21*/

console.log(test);

test = test - 1; /*0*/

console.log(test);

test = true; /*true*/

console.log(test);

/*task 8*/
let arr = [2, 3, 5, 8];
let result = 1;
let i = 0;

for (; i < arr.length; i++) {
    result *= arr[i];
}

console.log(result);

//task 9
let arr9 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < arr9.length; i++) {
    if (arr9[i] > 5 && arr9[i] < 10) {
        console.log(arr9[i]);
    }
}

//task 10
let arr10 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < arr10.length; i++) {
    if (arr10[i] % 2 === 0) {
        console.log(arr10[i]);
    }
}

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

const minmax = (num5 > num10) ? num10 : num5;

console.log(minmax);

//task 16.7
let arr167 = [5, 20, 54, 26, 70, 60, 0, 56, 0, 1];
let x;
let y;
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
