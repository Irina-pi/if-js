import { getColor } from "../src/scripts/getColor";

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

// eslint-disable-next-line no-undef
test('Change next color on click event', () => {
  let currentColor;
  colors.forEach((color) => {
    currentColor = event.target.style.color = color;
  });
  // eslint-disable-next-line no-undef
  expect(getColor(colors)).toBe(currentColor);
});