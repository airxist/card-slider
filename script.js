// Without using mouse movement X and 

// selected elements
const slider = document.getElementById("slider");


let dragging = false;
let pos = 0;
let diff = 0;

// mouse events
slider.addEventListener('mousedown', (e) => {
dragging = true;
console.log(e);
pos = e.clientX;
e.currentTarget.style.cursor = 'grabbing';
})

slider.addEventListener('mouseup', (e) => {
  dragging = false;
  e.currentTarget.style.cursor = 'grab';
})

slider.addEventListener('mousemove', (e) => {
  if (!dragging) return;
  diff = pos - e.clientX ;
  e.currentTarget.scrollLeft += diff;
})
