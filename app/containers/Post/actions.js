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

export function validatePostFields(props) {
  //note: we cant have /posts/validateFields because it'll match /posts/:id path!
  const request = axios.post(`${ROOT_URL}/posts/validate/fields`, props);

  return {
    type: VALIDATE_POST_FIELDS,
    payload: request
  };
}

export function validatePostFieldsSuccess() {
  return {
    type: VALIDATE_POST_FIELDS_SUCCESS
  };
}

export function validatePostFieldsFailure(error) {
  return {
    type: VALIDATE_POST_FIELDS_FAILURE,
    payload: error
  };
}

export function resetPostFields() {
  return {
    type: RESET_POST_FIELDS
  }
};
