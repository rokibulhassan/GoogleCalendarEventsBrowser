import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class EventItem extends Component {


  render() {

    return (
        <View style={styles.container}>
          <Text> {this.props.event.start.date} </Text>
          <Text> {this.props.event.description} </Text>
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