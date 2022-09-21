const ice = new Audio("audio/ice.mp3");
const pour = new Audio("audio/bottled.mp3");
const opened = new Audio("audio/open.mp3");
const mixed = new Audio("audio/mixed.mp3");
const drink = new Audio("audio/drink.mp3");

document.body.addEventListener("keydown", function (e) {
  delActive();
  let addActive = "key" + e.code.substr(-1);
  if (document.querySelector(`.${addActive}`)) {
    document.querySelector(`.${addActive}`).classList.add("active");
    play(e);
  }
});

function delActive() {
  document
    .querySelectorAll("div")
    .forEach((div) => div.classList.remove("active"));
}

function play(e) {
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
}
