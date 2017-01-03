import { createSelector } from 'reselect';

/**
 * Direct selector to the jobHunt state domain
 */
const selectJobHuntDomain = () => (state) => state.get('jobHunt');

/**
 * Other specific selectors
 */


/**
 * Default selector used by JobHunt
 */

const selectJobHunt = () => createSelector(
  selectJobHuntDomain(),
  (substate) => substate.toJS()
);

export default selectJobHunt;
export {
  selectJobHuntDomain,
};
