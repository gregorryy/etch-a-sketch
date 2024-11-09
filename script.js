let color = "white";

const redBtn = document.querySelector("#red");

redBtn.addEventListener("click", () => {
  color = "red";
});

const greenBtn = document.querySelector("#green");

greenBtn.addEventListener("click", () => {
  color = "green";
});

const blueBtn = document.querySelector("#blue");

blueBtn.addEventListener("click", () => {
  color = "blue";
});

const whiteBtn = document.querySelector("#white");

whiteBtn.addEventListener("click", () => {
  color = "white";
});

const randomBtn = document.querySelector("#random");

randomBtn.addEventListener("click", () => {
  color = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
});

function grid(size) {
  const container = document.querySelector("#container");
  container.innerHTML = "";
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  const gridSize = size * size;
  for (let i = 0; i < gridSize; i++) {
    const div = document.createElement("button");
    div.classList.add("sketch-div");
    container.appendChild(div);
  }

  const buttons = document.querySelectorAll(".sketch-div");

  let isMouseDown = false;

  // Lorsqu'on commence à appuyer sur le bouton
  document.addEventListener("mousedown", () => {
    isMouseDown = true;
  });

  // Lorsqu'on relâche le clic de la souris
  document.addEventListener("mouseup", () => {
    isMouseDown = false;
  });

  // Lorsqu'un bouton est cliqué ou survolé en maintenant le clic
  buttons.forEach((button) => {
    button.addEventListener("mousedown", (event) => {
      if (isMouseDown) {
        event.target.style.backgroundColor = color;
        event.target.style.border = "1px solid black";
      }
    });

    // Gérer le cas où l'utilisateur maintient le clic sur plusieurs boutons
    button.addEventListener("mouseover", (event) => {
      if (isMouseDown) {
        event.target.style.backgroundColor = color;
        event.target.style.border = "1px solid black";
      }
    });
    button.addEventListener("click", (event) => {
      event.target.style.backgroundColor = color;
      event.target.style.border = "1px solid black";
    });
  });

  return size;
}

grid(16);

const sizeBtn = document.querySelector("#changeSize");
sizeBtn.addEventListener("click", () => {
  let userGridSize = prompt("Enter grid size (max 100):", "16");
  if (userGridSize > 100) {
    alert("Grid size too large. Please enter a number between 1 and 100.");
    return;
  }
  if (userGridSize === null || userGridSize.trim() === "") {
    userGridSize = "16"; // Valeur par défaut
  }
  grid(userGridSize);
});

const restartBtn = document.querySelector(".restartBtn");
restartBtn.addEventListener("click", () => {
  let number = document.querySelectorAll(".sketch-div").length;
  let userGridSize = Math.sqrt(number);
  grid(userGridSize);
});
