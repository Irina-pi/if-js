// import { data } from './data.js';

// const funCardsHotelForId = function (idFun) {
//   const findHotelFun = data.find((item) => item.id === idFun);
//   return findHotelFun;
// };

// const createSliderItem = function (id) {
//   const xId = funCardsHotelForId(id);
//   const divId = document.getElementById(id);
//   const imgEl = divId.children[0].children[0];
//   imgEl.setAttribute('src', xId.imageUrl);
//
//   const name = divId.children[1];
//   name.textContent = xId.name;
//   const location = divId.children[2];
//   location.textContent = `${xId.city}, ${xId.country}`;
// };

// createSliderItem('71ce9eac-e9b9-44f0-a342-9ff0b565f3b7');
// createSliderItem('aa560608-a879-48a7-80b6-deff2806b250');
// createSliderItem('1d88fefe-edf1-4cda-844a-babbf29bb2b3');
// createSliderItem('a2bf824d-edd8-41f0-8b70-244334086ab4');

const createSliderItem = function (obj) {
  const divBlockEl = document.getElementById('mainDivHomesGuestLoves-js');

  const divMainEl = document.createElement('div');
  divMainEl.setAttribute('id', `${obj.id}`);
  divMainEl.setAttribute('class', 'block-three__img');

  const divImgEl = document.createElement('div');
  divImgEl.setAttribute('class', 'block-three__img block-three__img--hotel');

  const imgEl = document.createElement('img');
  imgEl.setAttribute('class', 'block-three__img');
  imgEl.setAttribute('alt', 'Hotel');
  imgEl.setAttribute('src', `${obj.imageUrl}`);

  const divCaptionEl = document.createElement('div');
  divCaptionEl.setAttribute(
    'class',
    'block-three__caption block-three__caption--hotel',
  );
  divCaptionEl.textContent = obj.name;

  const divLocationEl = document.createElement('div');
  divLocationEl.setAttribute(
    'class',
    'block-three__location block-three__location--hotel',
  );
  divLocationEl.textContent = `${obj.city}, ${obj.country}`;

  divMainEl.appendChild(divImgEl).appendChild(imgEl);
  divMainEl.appendChild(divCaptionEl);
  divMainEl.appendChild(divLocationEl);
  divBlockEl.appendChild(divMainEl);
};

fetch('https://if-student-api.onrender.com/api/hotels/popular')
  .then((response) => {
    return response.json();
  })
  .then((arr) => {
    arr.forEach((obj) => {
      createSliderItem(obj);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
