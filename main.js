const panel = document.querySelector(".grid-panel");
const resetButton = document.querySelector(".reset");
const gridSizeButton = document.querySelector(".grid-size");
let gridSize = 16;

createGrid(gridSize);

function createGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      panel.appendChild(createDiv(panel.clientWidth / gridSize));
    }
  }
}

function createDiv(size) {
  const div = document.createElement('div');
  div.classList.add('grid-element');
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;

  return div;
}
panel.addEventListener("mouseover", (e) => {
  if (e.target.matches(".grid-element")) {
    e.target.style.backgroundColor = "red";
  }
});

function reset() {
  const elements = document.querySelectorAll(".grid-element");
  elements.forEach((item) => {
    item.remove();
  });
};

resetButton.addEventListener("click", () => {
  reset();
  createGrid(gridSize);
});

gridSizeButton.addEventListener("click", () => {
  gridSize = parseInt(prompt());
  reset();
  createGrid(gridSize);
});