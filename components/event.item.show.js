import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class EventItemShow extends Component {


  render() {

    return (
        <View style={styles.container}>
          <Text> Title </Text>
          <Text> When </Text>
          <Text> Where </Text>
          <Text> Members </Text>
          <Text> Docs and Links </Text>
          <Text> Privacy </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  }
});