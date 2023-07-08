const grid = document.querySelector(".grid");
const child = document.createElement("div");
let pixels = document.getElementById("pixels");
let drawing = false;
pixels.addEventListener("input", (event) => {
  pixels.value = event.target.value;
  let pixelValue = event.target.value;
  const label = document.querySelector("label");
  label.textContent = `pixels : ${event.target.value}`;
  etch(pixelValue);
});
function etch(pix = pixels.value) {
  grid.querySelectorAll("*").forEach((kid) => {
    kid.remove();
  });
  let flexBasisValue = 640 / pix;
  child.style.flexBasis = `${flexBasisValue}px`;
  for (let i = 0; i < pix * pix; i++) {
    grid.appendChild(child.cloneNode(true));
  }
  const gridChildren = document.querySelectorAll(".grid div");
  grid.addEventListener("mousedown", () => {
    drawing = true;
    console.log(drawing);
  });
  gridChildren.forEach((gridChild) => {
    gridChild.addEventListener(
      "mouseover",
      (e) => {
        if (drawing) {
          e.target.style.backgroundColor = "red";
        }
      },
      false
    );
  });
  grid.addEventListener("mouseup", () => {
    drawing = false;
  });
}
const cleanButton = document.querySelector(".clean");
cleanButton.addEventListener("click", () => {
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
  });
});
etch();
