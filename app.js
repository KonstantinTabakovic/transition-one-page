const image = document.getElementById("inner");

let previousX;
let previousY;

document.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  if (previousX === undefined || previousY === undefined) {
    previousX = x;
    previousY = y;
  }

  if (x < previousX) {
    const padding = Math.min(previousX - x, 5);
    image.style.paddingLeft = padding + "px";
    image.style.transition = "padding 0.5s";
  }
  if (y < previousY) {
    const padding = Math.min(previousY - y, 5);
    image.style.paddingTop = padding + "px";
    image.style.transition = "padding 0.5s";
  }

  previousX = x;
  previousY = y;
});


