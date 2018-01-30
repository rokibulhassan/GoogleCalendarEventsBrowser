import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
export const AUTH_ACTION_TYPES = {
  LOGIN_START: 'LOGIN_START',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
};

const INITIAL_AUTH_STATE = {
  username: '',
  password: '',
  authenticated: false,
  inProgress: false,
};

function auth(state = INITIAL_AUTH_STATE, action) {
  switch (action.type) {
    case AUTH_ACTION_TYPES.LOGIN_START:
      return Object.assign({}, state, action.payload, {
        inProgress: true,
      });
    case AUTH_ACTION_TYPES.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        inProgress: false,
        authenticated: true,
      });
    case AUTH_ACTION_TYPES.LOGIN_FAILURE:
      return Object.assign({}, state, {
        authenticated: false,
        inProgress: false,
      });
    default:
      return state;
  }
}

export function startLogin(username, password) {
  return {
    type: AUTH_ACTION_TYPES.LOGIN_START,
    payload: { username, password },
  };
}

export function startLoginAsync(username, password) {
  return dispatch => {
    dispatch({
      type: AUTH_ACTION_TYPES.LOGIN_START,
      payload: { username, password },
    });

    setTimeout(() => {
      const random = Math.random();
      if (random >= 0.75) {
        dispatch({
          type: AUTH_ACTION_TYPES.LOGIN_FAILURE,
        });
      } else {
        dispatch({
          type: AUTH_ACTION_TYPES.LOGIN_SUCCESS,
        });
      }
    }, 1000);
  };
}

export function loginSuccess() {
  return { type: AUTH_ACTION_TYPES.LOGIN_SUCCESS };
}

export function loginFailure() {
  return { type: AUTH_ACTION_TYPES.LOGIN_FAILURE };
}

export function createReduxStore() {
  return createStore(auth, applyMiddleware(thunk));
}