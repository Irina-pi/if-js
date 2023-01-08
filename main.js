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

function searchByWorld(word = '') {
  const filterData = data.filter((itemObject) => {
    return itemObject.hotel === word ||
      itemObject.city === word ||
      itemObject.country === word
  });
  const lengthFilterData = filterData.length;
  let i = 0;
  while (i < lengthFilterData) {
    console.log((`${filterData[i].country}, ${filterData[i].city}, ${filterData[i].hotel}`));
    i++;
  }
  if (lengthFilterData === 0) {
    console.log('Search didn`t got results');
  }
}

searchByWorld('Berlin');
searchByWorld('King Kong Hostel');
searchByWorld('String');