/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import EventItemList from './components/event.item.list';
import GoogleLogin from './components/GoogleLogin';
import calendarEventsListService from './serivces/calendar.events.list.service';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import {Text, TouchableOpacity} from 'react-native';
import RNCalendarEvents from 'react-native-calendar-events';

export default class App extends Component {
  constructor (props) {
    super (props);
    this.onLoginSuccess = this.onLoginSuccess.bind (this);
    this.onLoginFail = this.onLoginFail.bind (this);

    this.state = {
      user: null,
    };
  }

  state = {
    calendarEvents: {},
    calendarEventsItems: [],
  };

  componentDidMount = () => {
    this.setState ({
      calendarEvents: calendarEventsListService (),
      calendarEventsItems: calendarEventsListService ().items,
    });
  };

  render () {
    // <View style={styles.container}>
    //   <EventItemList calendarEventsItems={this.state.calendarEventsItems}/>
    // </View>

    if (!this.state.user) {
      return (
          <GoogleLogin
              onLoginSuccess={this.onLoginSuccess}
              onLoginFail={this.onLoginFail}
          />
      );
    }

    if (this.state.user) {
      return (
          <View style={styles.container}>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>
              Welcome {this.state.user.name}
            </Text>
            <Text>Your email is: {this.state.user.email}</Text>

            <TouchableOpacity
                onPress={() => {
                  this.signOut ();
                }}
            >
              <View style={{marginTop: 50}}>
                <Text>Log out</Text>
              </View>
            </TouchableOpacity>
          </View>
      );
    }
  }

  onLoginSuccess (user) {
    this.setState ({user: user});
    console.log (user);
    this.fetchAllCalenders();
  }

  fetchAllCalenders () {
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

  fetchCalendarEvents (id) {
    RNCalendarEvents.fetchAllEvents (
        '2017-01-01T19:00:00.000Z',
        '2018-01-30T19:00:00.000Z',
        [id]
    )
        .then (events => {
          console.log(events)
        })
        .catch (error => {
          console.log ('Fetch calender event error ' + error);
        });
  }

  onLoginFail (error) {
    console.log ('Google login error' + error);
  }

  signOut () {
    GoogleSignin.revokeAccess ()
        .then (() => GoogleSignin.signOut ())
        .then (() => {
          this.setState ({user: null});
          console.log ('Google sign out');
        })
        .done ();
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});


// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */
//
// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';
// import {Provider} from 'react-redux';
//
// import {createReduxStore} from './Redux';
// import Navigator from './Navigation';
//
// const store = createReduxStore();
//
// export default class App extends Component {
//   render() {
//     return (
//         <Provider store={store}>
//           <Navigator/>
//         </Provider>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   }
// });
