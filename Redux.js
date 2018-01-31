import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import RNCalendarEvents from 'react-native-calendar-events';

export const ACTION_TYPES = {
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
            fetchCalendarEvents(calendar.id)
            break;
          }
        }
        //console.log(calendars)
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
        dispatch ({
          type: ACTION_TYPES.FETCH_CALENDAR_EVENTS,
          payload: {events},
        });
      })
      .catch (error => {
        console.log ('Fetch calender event error ' + error);
      });
}

function auth (state = INITIAL_AUTH_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.LOGIN_START:
      return Object.assign ({}, state, action.payload, {
        inProgress: true,
      });
    case ACTION_TYPES.LOGIN_SUCCESS:
      console.log("Login success")
      return Object.assign ({}, state, action.payload, {
        inProgress: false,
        authenticated: true
      });
    case ACTION_TYPES.LOGIN_FAILURE:
      return Object.assign ({}, state, {
        authenticated: false,
        inProgress: false,
      });
    case ACTION_TYPES.FETCH_CALENDAR_EVENTS:
      console.log("Calendar events")
      return Object.assign ({}, state, action.payload);
    default:
      return state;
  }
}

export function startLogin () {
  return {
    type: ACTION_TYPES.LOGIN_START,
  };
}

export function fetchEvents () {
  // fetchAllCalenders()

  // return {
  //   type: ACTION_TYPES.FETCH_CALENDAR_EVENTS,
  // };
  return dispatch => {
    fetchAllCalenders()
    dispatch ({
      type: ACTION_TYPES.FETCH_CALENDAR_EVENTS
    });
  };
}

export function fetchEventsAsync () {
  return dispatch => {
    dispatch ({
      type: ACTION_TYPES.FETCH_CALENDAR_EVENTS
    });

    fetchAllCalenders()
  };
}


export function startLoginAsync () {
  return dispatch => {
    dispatch ({
      type: ACTION_TYPES.LOGIN_START
    });

    GoogleSignin.signIn ()
      .then (user => {
        dispatch ({
          type: ACTION_TYPES.LOGIN_SUCCESS,
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
  return {type: ACTION_TYPES.LOGIN_SUCCESS};
}

export function loginFailure () {
  return {type: ACTION_TYPES.LOGIN_FAILURE};
}

export function createReduxStore () {
  return createStore (auth, applyMiddleware (thunk));
}
