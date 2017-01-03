import { createSelector } from 'reselect';

/**
 * Direct selector to the wantToLearn state domain
 */
const selectWantToLearnDomain = () => (state) => state.get('wantToLearn');

/**
 * Other specific selectors
 */


/**
 * Default selector used by WantToLearn
 */

const selectWantToLearn = () => createSelector(
  selectWantToLearnDomain(),
  (substate) => substate.toJS()
);

export default selectWantToLearn;
export {
  selectWantToLearnDomain,
};
