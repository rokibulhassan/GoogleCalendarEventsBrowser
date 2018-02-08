import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { startLogin, startLoginAsync } from './Redux';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import RNCalendarEvents from 'react-native-calendar-events';

class LoginScreen extends Component {
  componentDidMount () {
    this.setupGoogleSignin ();
    RNCalendarEvents.authorizeEventStore()
  }
    
  componentWillReceiveProps(nextProps) {
    if (!this.props.authenticated && nextProps.authenticated) {
      // If we just want to navigate
      this.props.navigation.navigate('Main');

      // For resetting to a screen
      // const resetAction = NavigationActions.reset({
      //   index: 0,
      //   actions: [NavigationActions.navigate({ routeName: 'Main' })],
      // });
      // this.props.navigation.dispatch(resetAction);
    }
  }

  async setupGoogleSignin () {
    try {
      await GoogleSignin.hasPlayServices ({autoResolve: true});
      await GoogleSignin.configure ({
        //webClientId: '788455155343-160l5akaku5j090stsa4634ecd4r6elj.apps.googleusercontent.com',
        //webClientId: '836713887465-0jrqtkj9cubbicqmnk212a4r9m3g8djf.apps.googleusercontent.com',
        offlineAccess: false,
      });

      const user = await GoogleSignin.currentUserAsync ();
      this.setState ({user});
    } catch (err) {
      console.log ('Play services error', err.code, err.message);
    }
  }

 checkLoginState () {
  console.log("checkLoginState ")
    GoogleSignin.currentUserAsync ()
      .then (user => {
        if (user == null) {
          //startLogin()
          ()=>this.props.startLogin()
        } else {
          signOut()
        }
      })
      .done ();
  }
  
 signOut () {
  console.log("checkLoginState "+user)
        GoogleSignin.revokeAccess ()
            .then (() => GoogleSignin.signOut ())
            .then (() => {
              //startLogin()
              ()=>this.props.startLogin()
            })
            .done ();
      }

  render() {
    const {
      navigation,
      authenticated,
      inProgress,
      startLogin,
      user
    } = this.props;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
        <Button onPress={()=> startLogin()} title="LOGIN" />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  startLogin: () =>
    dispatch(startLoginAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
