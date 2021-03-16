import immutable from 'immutable';

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default function printBestStudents(object) {
  const data = immutable.Seq(object)
    .filter((item) => item.score > 70).map((item) => {
      return {
        score: item.score,
        firstName: capitalize(item.firstName),
        lastName: capitalize(item.lastName),
      }
  });
  console.log(data.toJS());
}
