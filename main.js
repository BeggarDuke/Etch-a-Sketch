const panel = document.querySelector(".grid-panel");
const resetButton = document.querySelector(".reset");
const gridSizeButton = document.querySelector(".grid-size");
let gridSize = 16;
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
panel.addEventListener("mouseover", (e) => {
  if (e.target.matches(".grid-element")) {
    e.target.style.backgroundColor = "black";
  }
});

function reset() {
  const elements = document.querySelectorAll(".grid-element");
  elements.forEach((item) => {
    item.remove();
  });
  createGrid(gridSize);
}

resetButton.addEventListener("click", reset);

gridSizeButton.addEventListener("click", () => {
  let reserveGrid = gridSize;
  gridSize = prompt("Choose new size for grid.(<=100)");
  if (
    isNaN(gridSize) ||
    gridSize === null ||
    gridSize === "" ||
    gridSize > 100 ||
    gridSize < 0
  ) {
    gridSize = reserveGrid;
    alert("Please, type a number between 1 and 100.");
  } else {
    gridSize = parseInt(gridSize);
  }
  reset();
});
