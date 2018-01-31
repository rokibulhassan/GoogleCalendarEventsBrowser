import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

export const AUTH_ACTION_TYPES = {
  LOGIN_START: 'LOGIN_START',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE'
};

const INITIAL_AUTH_STATE = {
  user: null,
  authenticated: false,
  inProgress: false
};
function auth (state = INITIAL_AUTH_STATE, action) {
  switch (action.type) {
    case AUTH_ACTION_TYPES.LOGIN_START:
      return Object.assign ({}, state, action.payload, {
        inProgress: true,
      });
    case AUTH_ACTION_TYPES.LOGIN_SUCCESS:
      return Object.assign ({}, state, action.payload, {
        inProgress: false,
        authenticated: true
      });
    case AUTH_ACTION_TYPES.LOGIN_FAILURE:
      return Object.assign ({}, state, {
        authenticated: false,
        inProgress: false,
      });
    default:
      return state;
  }
}

export function startLogin () {
  return {
    type: AUTH_ACTION_TYPES.LOGIN_START,
    payload: {},
  };
}

export function startLoginAsync () {
  return dispatch => {
    dispatch ({
      type: AUTH_ACTION_TYPES.LOGIN_START
    });

    GoogleSignin.signIn ()
      .then (user => {
        dispatch ({
          type: AUTH_ACTION_TYPES.LOGIN_SUCCESS,
          payload: {user},
        });
      })
      .catch (err => {
        //this.props.onLoginFail (err);
      })
      .done ();
  };
}

export function loginSuccess () {
  return {type: AUTH_ACTION_TYPES.LOGIN_SUCCESS};
}

export function loginFailure () {
  return {type: AUTH_ACTION_TYPES.LOGIN_FAILURE};
}

export function createReduxStore () {
  return createStore (auth, applyMiddleware (thunk));
}
