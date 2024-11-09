function grid(size) {
  const container = document.querySelector("#container");
  container.innerHTML = "";
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  const gridSize = size * size;
  for (let i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    div.classList.add("sketch-div");
    container.appendChild(div);
  }
  const hoverDiv = document.querySelectorAll(".sketch-div");

  hoverDiv.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      item.style.backgroundColor =
        "#" + ((Math.random() * 0xffffff) << 0).toString(16);
      item.style.border = "1px solid white";
    });
  });
}

grid(16);
const restartBtn = document.querySelector(".restartBtn");
restartBtn.addEventListener("click", () => {
  let userGridSize = prompt("Enter grid size (max 100):", "16");
  if (userGridSize > 100) {
    alert("Grid size too large. Please enter a number between 1 and 100.");
    return;
  }
  if (userGridSize === null || userGridSize.trim() === "") {
    userGridSize = "16"; // Valeur par défaut
  }
  grid(userGridSize);
  return userGridSize;
});
