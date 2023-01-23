//task 19.5
const palindrome = (word) => word.split('').reverse().join('') === word;

console.log(palindrome('шалаш'));
console.log(palindrome('ирина'));
console.log(palindrome('окошечко'));
console.log(palindrome('cat'));

//task 19.6
const hotels = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa Cruz de Tenerife',
    country: 'Spain',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Virgin Hotel',
    city: 'Chicago',
    country: 'USA',
  },
  {
    name: 'Grand Beach Resort',
    city: 'Dubai',
    country: 'United Arab Emirates',
  },
  {
    name: 'Shilla Stay',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    name: 'San Firenze Suites',
    city: 'Florence',
    country: 'Italy',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Black Penny Villas',
    city: 'BTDC, Nuca Dua',
    country: 'Indonesia',
  },
  {
    name: 'Koko Hotel',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    name: 'Ramada Plaza',
    city: 'Istanbul',
    country: 'Turkey',
  },
  {
    name: 'Waikiki Resort Hotel',
    city: 'Hawaii',
    country: 'USA',
  },
  {
    name: 'Puro Hotel',
    city: 'Krakow',
    country: 'Poland',
  },
  {
    name: 'Asma Suites',
    city: 'Santorini',
    country: 'Greece',
  },
  {
    name: 'Cityden Apartments',
    city: 'Amsterdam',
    country: 'Netherlands',
  },
  {
    name: 'Mandarin Oriental',
    city: 'Miami',
    country: 'USA',
  },
  {
    name: 'Concept Terrace Hotel',
    city: 'Rome',
    country: 'Italy',
  },
  {
    name: 'Ponta Mar Hotel',
    city: 'Fortaleza',
    country: 'Brazil',
  },
  {
    name: 'Four Seasons Hotel',
    city: 'Sydney',
    country: 'Australia',
  },
  {
    name: 'Le Meridien',
    city: 'Nice',
    country: 'France',
  },
  {
    name: 'Apart Neptun',
    city: 'Gdansk',
    country: 'Poland',
  },
  {
    name: 'Lux Isla',
    city: 'Ibiza',
    country: 'Spain',
  },
  {
    name: 'Nox Hostel',
    city: 'London',
    country: 'UK',
  },
  {
    name: 'Leonardo Vienna',
    city: 'Vienna',
    country: 'Austria',
  },
  {
    name: 'Adagio Aparthotel',
    city: 'Edinburgh',
    country: 'UK',
  },
  {
    name: 'Steigenberger Hotel',
    city: 'Hamburg',
    country: 'Germany',
  },
];

// function searchByWord(word = '') {
//   const copyHotels = [...hotels];
//   const hotelsFilter = copyHotels.filter((hotel) => {
//     return hotel.name === word || hotel.city === word || hotel.country === word;
//   });
//   const result = hotelsFilter.map((item) => {
//     return `${item.country}, ${item.city}, ${item.name}`;
//   });
//   if (hotelsFilter.length === 0) {
//     return 'Search didn`t get results';
//   }
//   return result.join('; ');
// }

function searchByWord(word = '') {
  const result = hotels.reduce((acc, hotel) => {
    if (hotel.name === word || hotel.city === word || hotel.country === word) {
      acc.push(`${hotel.country}, ${hotel.city}, ${hotel.name}`);
    }
    return acc;
  }, []);
  if (!result.length) {
    return 'Search didn`t get results';
  }
  return result.join('; ');
}

console.log(searchByWord('Germany'));
console.log(searchByWord('Poland'));
console.log(searchByWord('City'));

//task 19.7

// function allCity(hotels = hotels) {
//   let h = hotels.forEach(index => console.log(index));
//   const result = {};
//   if()
//
// }
//
// allCity(hotels);
//
//
// console.log(hotels.findIndex((item) => item.country === 'Germany'));
// console.log(hotels.findIndex((item) => item.country === 'Germany'));
// console.log(hotels.findIndex((item) => item.country === 'UK'));

//
// function cityOfCountry(hotels) {
//
//   // const hotelsFilter = hotels.filter((hotel) => {
//   //   return hotel.country === hotel.country;
//   // });
//   const resArr = [];
//   hotels.forEach((obj) => {
//     const country = obj.country;
//     // const hotelsFilter = hotels.filter((hotel) => {
//     //   return hotel.country === hotel.country;
//     // });
//     // const city = obj.city;
//       if(hotels.country === obj.country) {
//         resArr.push(obj);
//       }
//   })
//   return resArr;
// }
//
// console.log(cityOfCountry(hotels));

  hotels.forEach((index) => {
    const fil = hotels.filter((item ) => {
      return item.country === index.country;
    })
    fil.map((item) => {
      return [item.country, item.city];
    })
  })

console.log(hotels);

const uniqueCountry = hotels.reduce((acc, {country, city},  index) => {
  acc[country] = hotels[index].city;

  return acc;
}, {});
console.log(uniqueCountry);

// const uniqueCountry = hotels.reduce((acc, {country, city},  index) => {
//   // acc[country] = [];
//   for (let i = 0; i < hotels.length; i++) {
//     const f = hotels.filter((hotel) => {
//       if(hotel.country === hotels[i].country) {
//         return f.push(hotels[i].city);
//       }
//     })
//   }
//   // const dubl = hotels.filter((hotel, index, array) => {
//   //   return array.indexOf(hotel) !== index;
//   // })
//
//   // return ;
// }, {});
// console.log(uniqueCountry);

0

const ex = hotels.reduce((acc, {country, city}, index) => {
  acc[country] = acc[country] ? acc[country] = [city, city] : acc[country] = [city];

    return acc;
  }, {});

console.log(ex);





const copHotels = [...hotels];



// const x = hotels.reduce((acc, hotel) => {
//  acc[hotel.country] = acc[hotel.country] ?
//    (acc[hotel.country] = [hotel.city, [hotel.city].push([hotel.city])]) : (acc[hotel.country] = [hotel.city]);
//     return acc;
// }, {});
// console.log(x);
//
// const x = hotels.reduce((acc, { country, city }) => {
//   acc[country] = acc[country] ?
//     (acc[country] = [city, [city.push(city)]) : (acc[country] = city);
//   return acc;
// }, {});
// console.log(x);

console.log('------------------------------------------');

const rCity = hotels.reduce((acc, {country, city}, index) => {
  acc[country] = [];
  acc[country].push(city);


  // const find = acc[country] === acc[country];
  // if (acc[country] === find) {
  //   acc[country].push(country, city);
  // }


  return acc;
}, {});

console.log(rCity);


//
// const filterCountry = hotels.filter((hotel, index) => {
//   return hotels[index].country === hotel.country;
// });
// console.log(filterCountry);

// const examplFun = hotels => Object.keys(hotels).reduce((result, key) => {
//   let nameObj = hotels[key].country;
//   let lengthObj = hotels[key].city;
//
//   if(lengthObj >= nameObj) {
//     result[key] = hotels[key];
//   }
//
//   return result;
// }, {})

console.log('------------------------------------------');

// const copyHotelsObj = {...copyHotels};
// console.log(copyHotelsObj);

const uniqueCity = (array) => {
  const copyArray = [...array];
  let arrAllCountry = [];
  copyArray.forEach((item) => arrAllCountry.push(item.country));
  const arrUniqCountry = arrAllCountry.filter(function (item, item2) {
    return arrAllCountry.indexOf(item) === item2;
  });
  let objUniqCountry = {...arrUniqCountry};
  return objUniqCountry;
}

console.log(uniqueCity(hotels));

const countryObj = {}
console.log('------------------------------------------');

// const copyHotels = [...hotels];
// let arrCountry = [];
//
// copyHotels.forEach((item) => arrCountry.push(item.country))
// console.log(arrCountry);
//
// const countryArray = arrCountry.filter(function (item, item2) {
//   return arrCountry.indexOf(item) === item2;
// });
// console.log(countryArray);