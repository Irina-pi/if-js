//task 17.6
function getColor(arr) {
  let index = 0;
  return (event) => {
    event.target.style.color = arr[index];
    index++;
    if (index === arr.length) {
      index = 0;
    }
  };
}

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

text1.addEventListener('click', getColor(colors));
text2.addEventListener('click', getColor(colors));
text3.addEventListener('click', getColor(colors));

// const colors = {
//   data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
//   [Symbol.iterator]() {
//     // ваш код
//   },
// };
//
// Подсказка! Перебор colors должен должен быть бесконечным. Для вызова используйте next(). Т.е. ваш listener должен иметь примерно такой вид:
//   const changeStyle = id => event => {
//     event.target.style.color = colors.next(id).value;
//   };
