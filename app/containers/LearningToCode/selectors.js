import { createSelector } from 'reselect';

/**
 * Direct selector to the learningToCode state domain
 */
const selectLearningToCodeDomain = () => (state) => state.get('learningToCode');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LearningToCode
 */

const selectLearningToCode = () => createSelector(
  selectLearningToCodeDomain(),
  (substate) => substate.toJS()
);

export default selectLearningToCode;
export {
  selectLearningToCodeDomain,
};
