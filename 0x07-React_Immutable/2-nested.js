import immutable from 'immutable';

export default function accessImmutableObject(object, array) {
  const deepData = immutable.Map(object);
  return deepData.getIn(array);
}
