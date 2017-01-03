import expect from 'expect';
import jobHuntReducer from '../reducer';
import { fromJS } from 'immutable';

describe('jobHuntReducer', () => {
  it('returns the initial state', () => {
    expect(jobHuntReducer(undefined, {})).toEqual(fromJS({}));
  });
});
