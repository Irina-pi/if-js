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