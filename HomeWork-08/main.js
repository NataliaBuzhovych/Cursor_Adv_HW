class Student {
  constructor(university, course, fullName, marks) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = marks;
    this.isDismissed = false;
  }
  getInfo() {
    console.log(`Студент ${this.course}го ${this.university},${this.fullName}`);
  }

  get mark() {
    if (this.isDismissed === false) {
      return this.marks;
    } else {
      return null;
    }
  }
  set markNew(mark) {
    if (this.isDismissed === false) {
      this.marks.push(mark);
    }
  }
  getAverageMark() {
    return this.marks.reduce((acc, e) => acc + e) / this.marks.length;
  }
  getDismiss() {
    this.isDismissed = true;
  }
  getRecover() {
    this.isDismissed = false;
  }
}

class BudgetStudent extends Student {
  constructor(university, course, fullName, marks) {
    super(university, course, fullName, marks);
  }
  getScholarship() {
    let averageMark = this.getAverageMark();
    if (averageMark >= 4 && this.isDismissed === false) {
      console.log("Ви отримали 1400 грн. стипендії");
    } else {
      console.log("Ви не отримали 1400 грн. стипендії");
    }
  }
}

const student1 = new Student(
  "Львівський національний університет імені І. Франка",
  "3",
  "Наталя Тижай",
  [5, 4, 4, 5]
);

const student2 = new BudgetStudent(
  "Львівський національний університет імені І. Франка",
  "2",
  "Оля Петрик",
  [5, 4, 4, 5]
);
