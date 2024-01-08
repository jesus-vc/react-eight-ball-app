// generate a random color in RGB format
const getRandomColor = () => {
  const getRandomValue = () => Math.floor(Math.random() * 256);
  const red = getRandomValue();
  const green = getRandomValue();
  const blue = getRandomValue();
  return `rgb(${red}, ${green}, ${blue})`;
};

export { getRandomColor };
