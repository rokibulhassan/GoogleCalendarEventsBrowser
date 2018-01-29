import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';

import LoginScreen from './LoginScreen';
import EventItemList from "./components/event.item.list";

import calendarEventsListService from './serivces/calendar.events.list.service'

const DailyEventScreen = () => (
    <EventItemList calendarEventsItems={calendarEventsListService().items}/>
);

const WeeklyEventScreen = () => (
    <EventItemList calendarEventsItems={calendarEventsListService().items}/>
);

const MonthlyEventScreen = () => (
    <EventItemList calendarEventsItems={calendarEventsListService().items}/>
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
