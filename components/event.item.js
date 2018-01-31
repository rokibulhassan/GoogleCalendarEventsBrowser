import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class EventItem extends Component {

//   location: 'Dhaka DAC',
// 01-31 10:39:52.826  7572  7756 W ReactNativeJS:     allDay: false,
// 01-31 10:39:52.826  7572  7756 W ReactNativeJS:     endDate: '2017-03-04T06:50:00.000Z',
// 01-31 10:39:52.826  7572  7756 W ReactNativeJS:     startDate: '2017-03-04T05:55:00.000Z',
// 01-31 10:39:52.826  7572  7756 W ReactNativeJS:     title: 'Flight to Saidpur, Bangladesh',

  render() {

    console.warn(this.props)

    return (
        <View style={styles.container}>
          <Text> {this.props.event.startDate} </Text>
          <Text> {this.props.event.title} </Text>
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