const panel = document.querySelector(".grid-panel");
const resetButton = document.querySelector(".reset");
const gridSizeButton = document.querySelector(".grid-size");
const blackColorButton = document.querySelector(".black-color");
const randomColorButton = document.querySelector(".random-color");
let gridSize = 16;
let opacity;
let newOpacity;
createGrid(gridSize);

function createGrid(gridSize) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    panel.appendChild(createDiv(panel.clientWidth / gridSize));
  }
}

function createDiv(size) {
  const div = document.createElement("div");
  div.classList.add("grid-element");
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;

  return div;
}

resetButton.addEventListener("click", reset);

gridSizeButton.addEventListener("click", () => {
  let reserveGrid = gridSize;
  gridSize = prompt("Choose new size for grid.(<= 64)");
  if (
    isNaN(gridSize) ||
    gridSize === null ||
    gridSize === "" ||
    gridSize > 64 ||
    gridSize <= 0
  ) {
    gridSize = reserveGrid;
    alert("Please, enter a number from 1 to 64.");
  } else {
    gridSize = parseInt(gridSize);
  }
  reset();
});

randomColorButton.addEventListener("click", () => {
  panel.removeEventListener("mouseover", blackColor);
  panel.addEventListener("mouseover", rgbHover);
});

blackColorButton.addEventListener("click", () => {
  panel.removeEventListener("mouseover", rgbHover);
  panel.addEventListener("mouseover", blackColor);
});

function reset() {
  const elements = document.querySelectorAll(".grid-element");
  elements.forEach((item) => {
    item.remove();
  });
  createGrid(gridSize);
}

function blackColor(e) {
  if (e.target.matches(".grid-element")) {
    if (
      e.target.style.backgroundColor === "" ||
      (e.target.style.backgroundColor.substr(0, 4) !== "rgba" &&
        e.target.style.backgroundColor !== "rgb(0, 0, 0)")
    ) {
      e.target.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    } else {
      opacity = parseFloat(e.target.style.backgroundColor.substr(-4));
      newOpacity = opacity + 0.1;
      e.target.style.backgroundColor = e.target.style.backgroundColor.replace(
        `${opacity}`,
        `${newOpacity}`
      );
    }
  }
}

function rgbHover(e) {
  if (e.target.matches(".grid-element")) {
    e.target.style.backgroundColor = `${getRandomColorNumber()}`;
  }
}

function getRandomColorNumber() {
  let rgbNumber = "rgb(";
  for (i = 0; i < 3; i++) {
    rgbNumber += Math.floor(Math.random() * 256);
    if (i < 2) {
      rgbNumber += ", ";
    } else {
      rgbNumber += ")";
    }
  }
  return rgbNumber;
}
