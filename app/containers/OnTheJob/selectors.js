import { createSelector } from 'reselect';

/**
 * Direct selector to the onTheJob state domain
 */
const selectOnTheJobDomain = () => (state) => state.get('onTheJob');

/**
 * Other specific selectors
 */


/**
 * Default selector used by OnTheJob
 */

const selectOnTheJob = () => createSelector(
  selectOnTheJobDomain(),
  (substate) => substate.toJS()
);

export default selectOnTheJob;
export {
  selectOnTheJobDomain,
};
