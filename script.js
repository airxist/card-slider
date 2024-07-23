// selected elements
const container = document.getElementById("container");
const slider = document.getElementById("slider");
const images = document.getElementsByClassName("image");


let dragging = false;
let pos = 0;


function switchDragging(value) {
  dragging = value;
}

container.addEventListener("mousedown", (e) => {
  e.currentTarget.style.cursor = 'grabbing'
  switchDragging(true);
});

container.addEventListener("mouseup" || "mouseleave", (e) => {
  switchDragging(false);
});

container.addEventListener("mousemove", (e) => {
  const element = e.currentTarget;
  const scrollLength = element.scrollWidth - element.clientWidth;
  if (!dragging) return;
  pos += -e.movementX;
  if (pos > scrollLength) {
    pos = scrollLength;
  } else if (pos < 0) {
    pos = 0;
  }
  element.scrollLeft = pos;
});
