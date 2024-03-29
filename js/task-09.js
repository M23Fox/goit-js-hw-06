function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorBtnEl = document.querySelector(".change-color");
const colorTextEl = document.querySelector(".color");

changeColorBtnEl.addEventListener("click", onClickChangeBgColorBody);

function onClickChangeBgColorBody() {
    const randomHexColor = getRandomHexColor();
    colorTextEl.textContent = randomHexColor;
    document.body.style.backgroundColor = `${randomHexColor}`;
}
