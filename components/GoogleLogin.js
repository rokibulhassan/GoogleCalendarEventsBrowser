import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

export default class GoogleLogin extends Component {
  componentDidMount () {
    this.setupGoogleSignin ();
  }

  render () {
    return (
      <View style={styles.container}>
        <GoogleSigninButton
          style={{width: 120, height: 44}}
          color={GoogleSigninButton.Color.Light}
          size={GoogleSigninButton.Size.Icon}
          onPress={() => {
            this.signIn ();
          }}
        />
      </View>
    );
  }

  async setupGoogleSignin () {
    try {
      await GoogleSignin.hasPlayServices ({autoResolve: true});
      await GoogleSignin.configure ({
        webClientId: '788455155343-160l5akaku5j090stsa4634ecd4r6elj.apps.googleusercontent.com',
        offlineAccess: false,
      });

      const user = await GoogleSignin.currentUserAsync ();
      console.log (user);
      this.setState ({user});
    } catch (err) {
      console.log ('Play services error', err.code, err.message);
    }
  }

  signIn () {
    GoogleSignin.signIn ()
      .then (user => {
        this.props.onLoginSuccess (user);
      })
      .catch (err => {
        this.props.onLoginFail (err);
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
});
