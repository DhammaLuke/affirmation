/*
 *
 * Post actions
 *
 */

import axios from 'axios';
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

const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';

export function createPost(props, tokenFromStorage) {
  const request = axios({
    method: 'post',
    data: props,
    url: `${ROOT_URL}/posts`,
    headers: {
      'Authorization': `Bearer ${tokenFromStorage}`
    }
  });
  return {
    type: CREATE_POST,
    payload: request,
  };
}

export function createPostSuccess(newPost) {
  return {
    type: CREATE_POST_SUCCESS,
    payload: newPost,
  };
}

export function createPostFailure(error) {
  return {
    type: CREATE_POST_FAILURE,
    payload: error,
  };
}

export function resetNewPost() {
  return {
    type: RESET_NEW_POST,
  };
}

