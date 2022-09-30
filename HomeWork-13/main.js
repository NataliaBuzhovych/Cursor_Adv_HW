function* createIdGenerator() {
  var index = 0;
  while (true) yield index++;
}
const idGenerator = createIdGenerator();

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

const up = document.getElementById("Up");
const down = document.getElementById("Down");
const text = document.getElementById("text");

function* newFontGenerator(font) {
  let changes = yield;
  while (true) {
    if (changes === "up") {
      font += 1;
    } else if (changes === "down") {
      font -= 1;
    }
    changes = yield font;
  }
}
const fontGenerator = newFontGenerator(14);
fontGenerator.next();

up.addEventListener("click", () => {
  text.style.fontSize = `${fontGenerator.next("up").value}px`;
});

down.addEventListener("click", () => {
  text.style.fontSize = `${fontGenerator.next("down").value}px`;
});
