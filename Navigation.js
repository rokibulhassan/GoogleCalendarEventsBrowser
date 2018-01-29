import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';

import LoginScreen from './LoginScreen';
import EventItemList from "./components/event.item.list";

import calendarEventsListService from './serivces/calendar.events.list.service'

function fetchEvents() {
  return calendarEventsListService().items
};

const DailyEventScreen = () => (
    <EventItemList events={fetchEvents()}/>
);

const WeeklyEventScreen = () => (
    <EventItemList events={fetchEvents()}/>
);

const MonthlyEventScreen = () => (
    <EventItemList events={fetchEvents()}/>
);

const MainScreen = TabNavigator({
  Daily: {
    screen: DailyEventScreen,
    navigationOptions: {
      headerTitle: 'Daily Events',
    },
  },
  Weekly: {
    screen: WeeklyEventScreen,
    navigationOptions: {
      headerTitle: 'Weekly Events',
    },
  },
  Monthly: {
    screen: MonthlyEventScreen,
    navigationOptions: {
      headerTitle: 'Monthly Events',
    },
  }
});

const RootNavigator = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
      headerTitle: 'Back',
    },
  },
  Main: {
    screen: MainScreen,
  },
});

export default RootNavigator;
