import expect from 'expect';
import wantToLearnReducer from '../reducer';
import { fromJS } from 'immutable';

describe('wantToLearnReducer', () => {
  it('returns the initial state', () => {
    expect(wantToLearnReducer(undefined, {})).toEqual(fromJS({}));
  });
});
