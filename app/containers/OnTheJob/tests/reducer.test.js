import expect from 'expect';
import onTheJobReducer from '../reducer';
import { fromJS } from 'immutable';

describe('onTheJobReducer', () => {
  it('returns the initial state', () => {
    expect(onTheJobReducer(undefined, {})).toEqual(fromJS({}));
  });
});
