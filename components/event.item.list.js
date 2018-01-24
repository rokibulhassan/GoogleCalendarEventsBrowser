import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import EventItem from './event.item';

export default class EventItemList extends Component {


  render() {

    return (
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <Text style={styles.title}> Time </Text>
            <Text style={styles.title}> Description </Text>
          </View>
          {this.props.calendarEventsItems.map((event) =>
              <EventItem
                  key={event.id}
                  event={event}
              />
          )}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 60,
    shadowOffset: {width: 0, height: 2},
    justifyContent: 'center',
    alignItems: 'center'
  },

  container: {
    padding: 10,
    flexDirection: "row"
  },

  title: {
    fontSize: 20,
    textAlign: 'center',
  }
});