/*
 *
 * Post reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  RESET_NEW_POST,
  VALIDATE_POST_FIELDS,
  VALIDATE_POST_FIELDS_SUCCESS,
  VALIDATE_POST_FIELDS_FAILURE,
  RESET_POST_FIELDS,
} from './constants';

const initialState = fromJS({
  newPost: { post: null, error: null, loading: false }
});

function postReducer(state = initialState, action) {
  let error;
  switch (action.type) {
    case CREATE_POST:
      return {...state, newPost: { ...state.newPost, loading: true, }};
    case CREATE_POST_SUCCESS:
      return {...state, newPost: { post: action.payload, error: null, loading: false, }};
    case CREATE_POST_FAILURE:
      error = action.payload || { message: action.payload.message };
      return {...state, newPost: { post: null, error: error, loading: false, }};
    case RESET_NEW_POST:
      return {...state, newPost: { post: null, error: null, loading: false, }};
    case VALIDATE_POST_FIELDS:
      return {...state, newPost: { ...state.newPost, error: null, loading: true, }};
    case VALIDATE_POST_FIELDS_SUCCESS:
      return {...state, newPost: { ...state.newPost, error: null, loading: false, }};
    case VALIDATE_POST_FIELDS_FAILURE:
      let result = action.payload;
      if (!result) {
        error = { message: action.payload.message, };
      } else {
        error = { title: result.title, message: result.message, anon: result.anon, };
      }
      return {...state, newPost: { ...state.newPost, error: error, loading: false, }};
    case RESET_POST_FIELDS:
      return {...state, newPost: { ...state.newPost, error: null, loading: null, }};
    default:
      return state;
  }
};

export default postReducer;
