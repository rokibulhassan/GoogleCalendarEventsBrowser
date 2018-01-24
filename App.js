/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import EventItemList from './components/event.item.list'
import calendarEventsListService from './serivces/calendar.events.list.service'


export default class App extends Component<{}> {

  state = {
    calendarEvents: {},
    calendarEventsItems: []
  }

  componentDidMount = () => {
    this.setState({
      calendarEvents: calendarEventsListService(),
      calendarEventsItems: calendarEventsListService().items,
    })
  }

  render() {
    return (
        <View style={styles.container}>
          <EventItemList calendarEventsItems={this.state.calendarEventsItems}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
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
  }
});
