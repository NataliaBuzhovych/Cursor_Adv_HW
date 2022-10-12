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
document.querySelector(".container").addEventListener("click", function (e) {
  delActive();
  if (e.target.classList.contains("key")) {
    e.target.classList.add("active");
    play(e);
  }
});

function delActive() {
  document
    .querySelectorAll("div")
    .forEach((div) => div.classList.remove("active"));
}

function play(e) {
  if (e.code === "KeyI" || e.target.classList.contains("keyI")) {
    ice.play();
  }
  if (e.code === "KeyP" || e.target.classList.contains("keyP")) {
    pour.play();
  }
  if (e.code === "KeyO" || e.target.classList.contains("keyO")) {
    opened.play();
  }
  if (e.code === "KeyM" || e.target.classList.contains("keyM")) {
    mixed.play();
  }
  if (e.code === "KeyD" || e.target.classList.contains("keyD")) {
    drink.play();
  }
}
