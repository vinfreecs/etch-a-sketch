const grid = document.querySelector(".grid");
const child = document.createElement("div");
let pixels = document.getElementById("pixels")
let flexBasisValue = 640 / 64;
child.style.flexBasis = `${flexBasisValue}px`;
for (let i = 0; i < 64 * 64; i++) {
  grid.appendChild(child.cloneNode(true));
}
const gridChildren = document.querySelectorAll(".grid div");
gridChildren.forEach((gridChild) => {
  gridChild.addEventListener(
    "mouseover",
    (e) => {
      e.target.style.backgroundColor = "red";
    },
    false
  );
});
