import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';

import LoginScreen from './LoginScreen';
import EventItemList from "./components/event.item.list";

import calendarEventsListService from './serivces/calendar.events.list.service'


const DailyEventScreen = () => (
    <EventItemList startDate='2018-01-01T00:00:00.000Z' endDate='2018-01-01T23:00:00.000Z'/>
);

const WeeklyEventScreen = () => (
    <EventItemList startDate='2018-01-01T00:00:00.000Z' endDate='2018-01-07T23:00:00.000Z'/>
);

const MonthlyEventScreen = () => (
    <EventItemList startDate='2018-01-01T00:00:00.000Z' endDate='2018-02-01T23:00:00.000Z'/>
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
