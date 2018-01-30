import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import RNCalendarEvents from 'react-native-calendar-events';

export const AUTH_ACTION_TYPES = {
  LOGIN_START: 'LOGIN_START',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  FETCH_CALENDAR_EVENTS: 'FETCH_CALENDAR_EVENTS',
};

const INITIAL_AUTH_STATE = {
  user: null,
  authenticated: false,
  inProgress: false,
  events:null
};

function fetchAllCalenders () {
  RNCalendarEvents.findCalendars ()
      .then (calendars => {
        // handle calendars
        for (let calendar of calendars) {
          if(calendar.isPrimary){
            this.fetchCalendarEvents(calendar.id)
            break;
          }
        }
        console.log(calendars)
      })
      .catch (error => {
        console.log ('Fetch calender error ' + error);
      });
}

export function fetchCalendarEvents (id) {
  RNCalendarEvents.fetchAllEvents (
      '2017-01-01T19:00:00.000Z',
      '2018-01-30T19:00:00.000Z',
      [id]
  )
      .then (events => {
        console.log(events)
        dispatch ({
          type: AUTH_ACTION_TYPES.FETCH_CALENDAR_EVENTS,
          payload: {events},
        });
      })
      .catch (error => {
        console.log ('Fetch calender event error ' + error);
      });
}

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
    case AUTH_ACTION_TYPES.FETCH_CALENDAR_EVENTS:
      return Object.assign ({}, state, action.payload);
    default:
      return state;
  }
}

export function startLogin (username, password) {
  return {
    type: AUTH_ACTION_TYPES.LOGIN_START,
    payload: {username, password},
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

  //   setTimeout(() => {
  //     const random = Math.random();
  //     if (random >= 0.75) {
  //       dispatch({
  //         type: AUTH_ACTION_TYPES.LOGIN_FAILURE,
  //       });
  //     } else {
  //       dispatch({
  //         type: AUTH_ACTION_TYPES.LOGIN_SUCCESS
  //       });
  //     }
  //   }, 1000);
  // };
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
