import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  console.log(
    Seq(object)
    .filter((item) => item.score > 70).map((item) => {
      return {
        ...item,
        firstName: capitalize(item.firstName),
        lastName: capitalize(item.lastName),
      }
  }).toJS());
}
