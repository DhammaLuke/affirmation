import expect from 'expect';
import learningToCodeReducer from '../reducer';
import { fromJS } from 'immutable';

describe('learningToCodeReducer', () => {
  it('returns the initial state', () => {
    expect(learningToCodeReducer(undefined, {})).toEqual(fromJS({}));
  });
});
