import immutable from 'immutable';

export default function printBestStudents(object) {
  const data = immutable.Seq(object)
    .filter((item) => item.score > 70).map((item) => {
      return {
        score: item.score,
        firstName: item.firstName.charAt(0).toUpperCase() + item.firstName.slice(1),
        lastName: item.lastName.charAt(0).toUpperCase() + item.lastName.slice(1),
      }
  });
  console.log(data.toJS());
}
