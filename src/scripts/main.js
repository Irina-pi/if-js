import { data } from './data.js';

const funCardsHotel = function (hotel) {
  const filterHotelFun = data.filter((item) => item.name === hotel);
  return filterHotelFun[0];
};

const funMake = function (hotelFun, imgElFunId, nameElFunId, locationElFunId) {
  const x = funCardsHotel(hotelFun);
  const imgElFun = document.getElementById(imgElFunId);
  const nameElFun = document.getElementById(nameElFunId);
  const locationElFun = document.getElementById(locationElFunId);

  imgElFun.setAttribute('src', x.imageUrl);

  const nameTextFun = document.createTextNode(x.name);
  nameElFun.appendChild(nameTextFun);

  const locationTextFun = document.createTextNode(x.city + ', ' + x.country);
  locationElFun.appendChild(locationTextFun);
};

funMake(
  'Hotel Leopold',
  'imgHotelLeopold-js',
  'nameHotelLeopold-js',
  'locationHotelLeopold-js',
);
funMake(
  'Apartment Sunshine',
  'imgApartSunshine-js',
  'nameApartSunshine-js',
  'locationApartSunshine-js',
);
funMake(
  'Villa Kunerad',
  'imgVillaKunerad-js',
  'nameVillaKunerad-js',
  'locationVillaKunerad-js',
);
funMake(
  'Hostel Friendship',
  'imgHostelFriendship-js',
  'nameHostelFriendship-js',
  'locationHostelFriendship-js',
);
