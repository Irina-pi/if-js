import { data } from './data.js';

const funCardsHotelForId = function (idFun) {
  const findHotelFun = data.find((item) => item.id === idFun);
  return findHotelFun;
};

const createSliderItem = function (id) {
  const xId = funCardsHotelForId(id);
  const divId = document.getElementById(id);
  const imgEl = divId.children[0].children[0];
  imgEl.setAttribute('src', xId.imageUrl);

  const name = divId.children[1];
  name.textContent = xId.name;

  const location = divId.children[2];
  location.textContent = `${xId.city}, ${xId.country}`;
}

createSliderItem('71ce9eac-e9b9-44f0-a342-9ff0b565f3b7');
createSliderItem('aa560608-a879-48a7-80b6-deff2806b250');
createSliderItem('1d88fefe-edf1-4cda-844a-babbf29bb2b3');
createSliderItem('a2bf824d-edd8-41f0-8b70-244334086ab4');






// const findHotel = data.find((item) => item.name === 'Villa Kunerad');
// console.log(findHotel);  //{id: '1d88fefe-edf1-4cda-844a-babbf29bb2b3', name: 'Villa Kunerad', city: 'Vysokie Tatry', country: 'Slowakia', imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg'}
// const filterHotel = data.filter((item) => item.name === 'Villa Kunerad');
// console.log(filterHotel);  //[{…}]




// const funCardsHotel = function (hotel) {
//   const findHotelFun = data.find((item) => item.name === hotel);
//   return findHotelFun;
// };
//
// const funMake = function (hotelFun, imgElFunId, nameElFunId, locationElFunId) {
//   const x = funCardsHotel(hotelFun);
//   const imgElFun = document.getElementById(imgElFunId);
//   const nameElFun = document.getElementById(nameElFunId);
//   const locationElFun = document.getElementById(locationElFunId);
//
//   imgElFun.setAttribute('src', x.imageUrl);
//   nameElFun.textContent = x.name;
//   locationElFun.textContent = x.city + ', ' + x.country;
// };
//
// funMake(
//   'Hotel Leopold',
//   'imgHotelLeopold-js',
//   'nameHotelLeopold-js',
//   'locationHotelLeopold-js',
// );
// funMake(
//   'Apartment Sunshine',
//   'imgApartSunshine-js',
//   'nameApartSunshine-js',
//   'locationApartSunshine-js',
// );
// funMake(
//   'Villa Kunerad',
//   'imgVillaKunerad-js',
//   'nameVillaKunerad-js',
//   'locationVillaKunerad-js',
// );
// funMake(
//   'Hostel Friendship',
//   'imgHostelFriendship-js',
//   'nameHostelFriendship-js',
//   'locationHostelFriendship-js',
// );
