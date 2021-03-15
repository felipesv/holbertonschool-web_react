import immutable from 'immutable';

export const mergeDeeplyElements = (page1, page2) => immutable.Map(page1).mergeDeep(immutable.Map(page2));
