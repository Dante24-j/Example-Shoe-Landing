const classCircles = document.getElementsByClassName('circles__object');
const classWindow = document.getElementsByClassName('section__circles')[0];
const windowWidth = classWindow.clientWidth;
const windowHeight = classWindow.clientHeight;

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

for (let index = 0; index < classCircles.length; index++) {
  const element = classCircles[index];
  const left = getRandomArbitrary(0, windowWidth);
  const top = getRandomArbitrary(0, windowHeight);
  const zoomStartUndEnd = getRandomArbitrary(0, 1);

  element.style = `top: ${top}px; left: ${left}px`;
  console.log(zoomStartUndEnd);
}
