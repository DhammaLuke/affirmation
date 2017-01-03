import expect from 'expect';
import singlePostReducer from '../reducer';
import { fromJS } from 'immutable';

describe('singlePostReducer', () => {
  it('returns the initial state', () => {
    expect(singlePostReducer(undefined, {})).toEqual(fromJS({}));
  });
});
