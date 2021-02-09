/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

/* Task 1 */
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

/* Task 2 */
interface Directors extends Teacher {
  numberOfReports: number;
}


/* Task 3 */
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: PrintTeacherFunction = function (firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
};

/* Task 4 */
interface Student {
  firstName: string;
  lastName: string;
  workOnHomework: () => string;
  displayName: () => string;
}

interface StudentConstructor{
  new(firstName: string, lastName: string): Student;
}

class StudentClass implements Student{
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

/* TESTS
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

console.log(printTeacher("Jhon", "Doe"));*/
