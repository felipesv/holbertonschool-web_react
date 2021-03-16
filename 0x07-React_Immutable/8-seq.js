import { Seq } from 'immutable';

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default function printBestStudents(object) {
  const data = Seq(object)
    .filter((item) => item.score > 70).map((item) => {
      return {
        ...item,
        firstName: capitalize(item.firstName),
        lastName: capitalize(item.lastName),
      }
  });
  console.log(data.toJS());
}
