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

//task 10
const arr10 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < arr10.length; i++) {
    if (arr10[i] % 2 === 0) {
        console.log(arr10[i]);
    }
}

//task 18.5
const newFormatData = function (dataFun) {
    return dataFun.replace(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/g, '$<day>.$<month>.$<year>');
}

const dataF = '2020-11-26'
console.log(newFormatData(dataF));


//task 18.6
const data = [
    {
        country: 'Russia',
        city: 'Saint Petersburg',
        hotel: 'Hotel Leopold',
    },
    {
        country: 'Spain',
        city: 'Santa Cruz de Tenerife',
        hotel: 'Apartment Sunshine',
    },
    {
        country: 'Slowakia',
        city: 'Vysokie Tatry',
        hotel: 'Villa Kunerad',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hostel Friendship',
    },
    {
        country: 'Indonesia',
        city: 'Bali',
        hotel: 'Ubud Bali Resort&SPA',
    },
    {
        country: 'Netherlands',
        city: 'Rotterdam',
        hotel: 'King Kong Hostel',
    },
    {
        country: 'Marocco',
        city: 'Ourika',
        hotel: 'Rokoko Hotel',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hotel Rehberge Berlin Mitte',
    },
];

function seachByWorld(world = '') {
    for (let i = 0; i < data.length; i++) {
        result = data[i].country + ', ' + data[i].city + ', ' + data[i].hotel;
        if (data[i].city === world || data[i].country === world || data[i].hotel === world) {
            return result;
        }
    }
}

console.log(seachByWorld('Germany'));
console.log(seachByWorld('please'));
console.log(seachByWorld('King Kong Hostel'));