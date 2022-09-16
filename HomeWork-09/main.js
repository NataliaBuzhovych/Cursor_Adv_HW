function getRandomBgColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  return bgColor;
}

let a = [];
function creareBlock() {
  for (let i = 0; i < 25; i++) {
    a[i] = document.createElement("div");
    a[i].classList.add("box");
    document.body.append(a[i]);
  }
  return a;
}

function generateBlocks() {
  creareBlock();
  a.forEach((element) => {
    element.style.background = getRandomBgColor();
  });
}
generateBlocks();

let div = document.createElement("div");
div.classList.add("text");
document.body.append(div);
div.innerHTML = "Advanced";

function generateBlocksInterval() {
  creareBlock();
  setInterval(() => {
    a.forEach((element) => {
      element.style.background = getRandomBgColor();
    });
  }, 1000);
}
generateBlocksInterval();
