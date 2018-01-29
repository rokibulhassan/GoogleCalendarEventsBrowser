import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import { startLogin, startLoginAsync } from './Redux';

class LoginScreen extends Component {
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

  render() {
    const {
      navigation,
      username,
      password,
      authenticated,
      inProgress,
      startLogin,
    } = this.props;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text>username: {username}</Text>
          <Text>password: {password}</Text>
          <Text>authenticated: {authenticated ? 'YES' : 'NO'}</Text>
          <Text>inProgress: {inProgress ? 'YES' : 'NO'}</Text>
        </View>

        <Button onPress={() => startLogin('foo', 'bar')} title="LOGIN" />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  startLogin: (username, password) =>
    dispatch(startLoginAsync(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
