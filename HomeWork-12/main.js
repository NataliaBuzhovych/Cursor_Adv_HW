const btn1Planets = document.querySelector(".one");
const btn2Characters = document.querySelector(".two");
let numFilm = document.querySelector(".input");
let linkALLPlanets = "https://swapi.dev/api/planets/";
let card = document.getElementById("card");

async function getInfoCharacters() {
  try {
    if (numFilm.value > 6 || numFilm.value < 1) {
      alert("Помилка.Введіть число в діапазоні від 1 до 6");
    }
    const request = await fetch(
      `https://swapi.dev/api/films/${numFilm.value}`,
      {
        method: "GET",
      }
    );
    const response = await request.json();
    let people = [];
    let el = [];
    for (let i = 0; i < response.characters.length; i++) {
      el[i] = await fetch(response.characters[i]);
      people[i] = await el[i].json();
    }
    infoAboutCharacter(people);
  } catch (e) {
    alert(e);
  }
}

async function getInfoPlanets() {
  try {
    let request = await fetch(linkALLPlanets, {
      method: "GET",
    });
    let response = await request.json();
    namePlanets(response.results);

    let buttonPrevious = createButton("button_nav", "previous");
    let buttonNext = createButton("button_nav", "next");
    if (!response.previous == 0) {
      buttonPrevious.addEventListener("click", function () {
        linkALLPlanets = response.previous;
        getInfoPlanets();
      });
    }
    if (!response.next == 0) {
      buttonNext.addEventListener("click", function () {
        linkALLPlanets = response.next;
        getInfoPlanets();
      });
    }
  } catch (e) {
    console.log({ e });
  }
}
function namePlanets(arr) {
  document.querySelector("#card").innerHTML = "";
  arr.forEach((el) => {
    createDiv("planet").innerHTML = "Plamet name: " + el.name;
  });
}
function infoAboutCharacter(arr) {
  document.querySelector("#card").innerHTML = "";
  arr.forEach((el) => {
    if (el.gender.toLowerCase() == "male") {
      el.gender = "♂";
    } else if (el.gender.toLowerCase() == "female") {
      el.gender = "♀";
    } else {
      el.gender = "🤖";
    }
    createDiv("divCharacter").innerHTML =
      "Name: " +
      el.name +
      ". Birth:  " +
      el.birth_year +
      ". Gender: " +
      el.gender;
  });
}

function createDiv(titleClass) {
  let div = document.createElement("div");
  card.append(div);
  div.classList.add(titleClass);
  return div;
}
function createButton(titleClass, html) {
  let button = document.createElement("button");
  document.querySelector("#card").append(button);
  button.classList.add(titleClass);
  button.innerHTML = html;
  return button;
}

btn2Characters.addEventListener("click", function () {
  getInfoCharacters();
  card.classList.remove("planets");
  card.classList.add("characters");
});
btn1Planets.addEventListener("click", function () {
  getInfoPlanets();
  card.classList.remove("characters");
  card.classList.add("planets");
});
