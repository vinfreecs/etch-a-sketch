const grid = document.querySelector(".grid");
const child = document.createElement("div");
let mode = document.querySelector(".mode");
let pixels = document.getElementById("pixels");
let drawing = false;
let colorChange = document.getElementById("colorChange");
let color = "black";
const draw = document.querySelector(".draw");
console.log(draw);
draw.addEventListener("click", etching);
pixels.addEventListener("input", (event) => {
  pixels.value = event.target.value;
  let pixelValue = event.target.value;
  const label = document.querySelector("label");
  label.textContent = `pixels : ${event.target.value}`;
  etch(pixelValue);
});
colorChange.addEventListener("input", () => {
  color = colorChange.value;
});
function etching() {
  mode.textContent = "Drawing..";
  const gridChildren = document.querySelectorAll(".grid div");
  grid.addEventListener("mousedown", () => {
    drawing = true;
  });
  gridChildren.forEach((gridChild) => {
    gridChild.addEventListener(
      "mouseover",
      (e) => {
        if (drawing) {
          e.target.style.backgroundColor = color;
        }
      },
      false
    );
  });
  grid.addEventListener("mouseup", () => {
    drawing = false;
  });
}
function etch(pix = pixels.value) {
  grid.querySelectorAll("*").forEach((kid) => {
    kid.remove();
  });
  let flexBasisValue = 640 / pix;
  child.style.flexBasis = `${flexBasisValue}px`;
  for (let i = 0; i < pix * pix; i++) {
    grid.appendChild(child.cloneNode(true));
  }
  etching();
}
const cleanButton = document.querySelector(".clean");
cleanButton.addEventListener("click", () => {
  mode.textContent = "Erasing..";
  grid.addEventListener("mousedown", () => {
    drawing = true;
  });
  const gridChildren = document.querySelectorAll(".grid div");
  gridChildren.forEach((gridChild) => {
    gridChild.addEventListener(
      "mouseover",
      (e) => {
        if (drawing) {
          e.target.style.backgroundColor = "";
        }
      },
      false
    );
  });
  grid.addEventListener("mouseup", () => {
    drawing = false;
    //cleanButton.style.backgroundColor = "rgba(84, 178, 228, 0.738)";
  });
});

etch();
