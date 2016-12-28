import expect from 'expect';
import postReducer from '../reducer';
import { fromJS } from 'immutable';

describe('postReducer', () => {
  it('returns the initial state', () => {
    expect(postReducer(undefined, {})).toEqual(fromJS({}));
  });
});
