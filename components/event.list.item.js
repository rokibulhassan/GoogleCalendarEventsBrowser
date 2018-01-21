import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class EventListItemList extends Component {


  render() {

    return (
        <View style={styles.container}>
          <Text> 10:50 AM </Text>
          <Text> Meeting with Tom </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row"
  }
});