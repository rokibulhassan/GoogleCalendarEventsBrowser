import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class EventItem extends Component {


  render() {
    
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
    flexDirection: "row",
    borderColor: "red",
    borderWidth: 1
  }
});