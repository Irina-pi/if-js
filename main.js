//task 21.5
const currentYear = 2022;
const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  },
];

class User {
  constructor({ firstName, lastName }) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends User {
  constructor({ firstName, lastName, admissionYear, courseName }) {
    super({ firstName, lastName });
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  get course() {
    return currentYear - this.admissionYear;
  }
}

class Students {
  constructor({ studentsData = [] }) {
    this.students = studentsData.map((studentData) => new Student(studentData));
  }

  getInfo() {
    this.students.sort((a, b) => a.course - b.course);
    return this.students.map(
      (student) =>
        `${student.fullName} - ${student.courseName}, ${student.course}`,
    );
  }
}

const newStudents = new Students({ studentsData });

console.log(newStudents.getInfo());
