//task 17.5
function sum(a) {
  return function (b) {
    return a + b;
  };
}

// console.log(sum(5)(2));

//task 17.6
// const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
// let i1 = 0;
// let i2 = 0;
// let i3 = 0;
//
// function getColor1() {
//   while (i1 < colors.length) {
//     i1++;
//     return colors[i1];
//   }
//   if (i1 === colors.length) {
//     i1 = 0;
//   }
//   event.target.style.color = colors[i1];
// }
//
// function getColor2() {
//   while (i2 < colors.length) {
//     i2++;
//     return colors[i2];
//   }
//   if (i2 === colors.length) {
//     i2 = 0;
//   }
//   event.target.style.color = colors[i2];
// }
//
// function getColor3() {
//   while (i3 < colors.length) {
//     i3++;
//     return colors[i3];
//   }
//   if (i3 === colors.length) {
//     i3 = 0;
//   }
//   event.target.style.color = colors[i3];
// }
//
// const text1 = document.getElementById('text1');
// const text2 = document.getElementById('text2');
// const text3 = document.getElementById('text3');
//
// text1.addEventListener('click', (event) => {
//   event.target.style.color = getColor1(text1);
// });
//
// text2.addEventListener('click', (event) => {
//   event.target.style.color = getColor2(text2);
// });
//
// text3.addEventListener('click', (event) => {
//   event.target.style.color = getColor3(text3);
// });
