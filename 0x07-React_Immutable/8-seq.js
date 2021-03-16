import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const capitalize = (str) => {
    return str.trim().replace(/^\w/, (c) => c.toUpperCase());
  }

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
