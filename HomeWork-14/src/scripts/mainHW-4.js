const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];

const marks = [4, 5, 5, 3, 4, 5];

const girls = [];
const boys = [];
for (let i = 0; i < students.length; i++) {
  if (students[i].lastIndexOf("а") === students[i].length - 1) {
    girls.push(students[i]);
  } else {
    boys.push(students[i]);
  }
}

const studentsCouple = [];
for (let i = 0; i < girls.length; i++) {
  studentsCouple.push([boys[i], girls[i]]);
}
// console.log(studentsCouple);

const studentsAndTopics = [];

for (let i = 0; i < themes.length; i++) {
  studentsAndTopics.push([boys[i] + " і " + girls[i], themes[i]]);
}
// console.log(studentsAndTopics);

const studentsAndMarks = [];

for (let i = 0; i < marks.length; i++) {
  studentsAndMarks.push([students[i], marks[i]]);
}
// console.log(studentsAndMarks);

export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const studentsAndTopicsAndMarks = [];
for (let i = 0; i < themes.length; i++) {
  studentsAndTopicsAndMarks.push([
    boys[i] + " і " + girls[i],
    themes[i],
    getRandomNumber(1, 5),
  ]);
}
// console.log(studentsAndTopicsAndMarks);
