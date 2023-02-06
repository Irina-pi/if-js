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
  const indexExpect = colors.indexOf(getColorTest(colors[0]));
  // eslint-disable-next-line no-undef
  expect(indexExpect).toBeLessThan(colors.indexOf(colors[0]));
  // eslint-disable-next-line no-undef
  expect(indexExpect).toBeLessThan(colors.indexOf(colors[1]));
  // eslint-disable-next-line no-undef
  expect(indexExpect).toBeLessThan(colors.indexOf(colors[2]));
  // eslint-disable-next-line no-undef
  expect(indexExpect).toBeLessThan(colors.indexOf(colors[3]));
  // eslint-disable-next-line no-undef
  expect(indexExpect).toBeLessThan(colors.indexOf(colors[4]));
  // eslint-disable-next-line no-undef
  expect(indexExpect).toBeGreaterThanOrEqual(colors.indexOf(colors[5]));
});
