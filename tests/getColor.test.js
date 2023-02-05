function getColorTest(arr) {
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

// eslint-disable-next-line no-undef
test('Change next color on click event', () => {
  let currentColor;
  colors.forEach((color) => {
    return currentColor = event.target.style.color = color;
  })
  // eslint-disable-next-line no-undef
  expect(`Color ${currentColor}`).toBe(`Color ${event.target.style.color = getColorTest(colors)}`);
});