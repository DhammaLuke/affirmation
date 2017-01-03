import { createSelector } from 'reselect';

/**
 * Direct selector to the singlePost state domain
 */
const selectSinglePostDomain = () => (state) => state.get('singlePost');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SinglePost
 */

const selectSinglePost = () => createSelector(
  selectSinglePostDomain(),
  (substate) => substate.toJS()
);

export default selectSinglePost;
export {
  selectSinglePostDomain,
};
