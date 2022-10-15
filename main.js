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
const arr8 = [2, 3, 5, 8];
let result8 = 1;

for (let i = 0; i < arr8.length; i++) {
  result8 *= arr8[i];
}

console.log(result8);

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

//task 16.5
function polyndrome(poly) {
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
    if (array[i] % 10 === 0 && array[i] !== 0 && array[i] !== 100) {
      const y = array[i] / 10;
      array[i] = y + 'zero';
    } else if (array[i] % 100 === 0 && array[i] !== 0) {
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

//task 18.5
const newFormatData = function (dataFun) {
  return dataFun.replace(
    /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/g,
    '$<day>.$<month>.$<year>',
  );
};

const dataF = '2020-11-26';
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
    const result = data[i].country + ', ' + data[i].city + ', ' + data[i].hotel;
    if (
      data[i].city === world ||
      data[i].country === world ||
      data[i].hotel === world
    ) {
      return result;
    }
  }
}

console.log(seachByWorld('Germany'));
console.log(seachByWorld('please'));
console.log(seachByWorld('King Kong Hostel'));
