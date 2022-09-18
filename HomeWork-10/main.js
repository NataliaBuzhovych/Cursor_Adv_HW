const ice = new Audio("audio/ice.mp3");
const pour = new Audio("audio/bottled.mp3");
const opened = new Audio("audio/open.mp3");
const mixed = new Audio("audio/mixed.mp3");
const drink = new Audio("audio/drink.mp3");

document.body.addEventListener("keydown", function (e) {
  if (e.code === "KeyI") {
    ice.play();
  }
  if (e.code === "KeyP") {
    pour.play();
  }
  if (e.code === "KeyO") {
    opened.play();
  }
  if (e.code === "KeyM") {
    mixed.play();
  }
  if (e.code === "KeyD") {
    drink.play();
  }
});

function myFunction(e) {
  let elems = document.querySelectorAll(".active");
  [].forEach(
    (elems) =>
      function (el) {
        el.classList.remove("active");
      }
  );
  e.target.className = "active";
}
