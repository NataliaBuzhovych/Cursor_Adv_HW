const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

//......................................................................................................

function getSubjects(student) {
  let subjectsStudent = Object.keys(student.subjects);
  let upperCaseSubjects = [];
  subjectsStudent.forEach((el) => {
    el = (el.slice(0, 1).toUpperCase() + el.slice(1)).replace("_", " ");
    upperCaseSubjects.push(el);
  });
  return upperCaseSubjects;
}
console.log(getSubjects(students[0]));
//......................................................................................................

function getAverageMark(obj) {
  let allMarks = [];
  allMarks = Object.values(obj.subjects).flat();
  let sum = 0;
  allMarks.forEach((el) => {
    sum += el;
  });
  let averege = sum / allMarks.length;

  return Math.round(averege * 100) / 100;
}
console.log(getAverageMark(students[2]));
//......................................................................................................

function getStudentInfo(obj) {
  let averageMark = getAverageMark(obj);
  return {
    name: obj.name,
    course: obj.course,
    averageMark: averageMark,
  };
}
console.log(getStudentInfo(students[1]));
//......................................................................................................

function getStudentsNames(array) {
  let nameStudents = [];
  array.forEach((el) => {
    nameStudents.push(el.name);
  });
  return nameStudents.sort();
}
console.log(getStudentsNames(students));
//......................................................................................................

function getBestStudent(array) {
  let averageMarkStudents = array.reduce((acc, el, i) => {
    acc[i] = {
      name: el.name,
      mark: getAverageMark(el),
    };
    return acc;
  }, []);
  let bestStudent = averageMarkStudents.reduce((a, b) => {
    if (a.mark > b.mark) {
      return a;
    } else {
      return b;
    }
  }).name;
  return bestStudent;
}
console.log(getBestStudent(students));
//......................................................................................................

function calculateWordLetters(word) {
  let myarray = [];
  let counts = {};
  for (let i = 0; i < word.length; i++) {
    myarray[i] = word[i];
  }
  myarray.forEach((el) => {
    counts[el] = (counts[el] || 0) + 1;
  });
  return counts;
}
console.log(calculateWordLetters("bcdjhkddsh"));
