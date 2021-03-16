import { Seq } from 'immutable';

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}


export default function printBestStudents(grades) {
  const students = Seq(grades);

  console.log(students
    .filter((student) => student.score > 70)
    .map((student) => {
      const { firstName, lastName } = student;
      return {
        ...student,
        firstName: capitalize(firstName),
        lastName: capitalize(lastName),
      };
    })
    .toJS());
}
