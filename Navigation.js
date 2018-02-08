import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';

import LoginScreen from './LoginScreen';
import EventItemList from "./components/event.item.list";

import calendarEventsListService from './serivces/calendar.events.list.service'


const DailyEventScreen = () => (
    // <EventItemList startDate={dailyStartTime()} endDate={dailyEndTime()}/>
    <EventItemList startDate={monthlyStartTime()} endDate={monthlyEndTime()}/>
);

const WeeklyEventScreen = () => (
    //<EventItemList startDate={weeklyStartTime()}  endDate={weeklyEndTime()}/>
    <EventItemList startDate={monthlyStartTime()} endDate={monthlyEndTime()}/>
);

const MonthlyEventScreen = () => (
    <EventItemList startDate={monthlyStartTime()} endDate={monthlyEndTime()}/>
);

function setStartTime(d){
  d.setHours(0);
  d.setMinutes(0);
  d.setSeconds(0);
  d.setMilliseconds(0);
  return d;
}
function setEndTime(d){
  d.setHours(23);
  d.setMinutes(59);
  d.setSeconds(59);
  d.setMilliseconds(999);
  return d;
}
function dailyStartTime(){
  var today = new Date();
  return setStartTime(today).toISOString(); //"2018-01-01T00:00:00.000Z";
}

function dailyEndTime(){
  var today = new Date();
  return setEndTime(today).toISOString();
}

function weeklyStartTime(){
  var today = new Date();
  var diff = today.getDate() - today.getDay();
  var firstDay = new Date(today.setDate(diff));
  return setStartTime(firstDay).toISOString();
}

function weeklyEndTime(){
  var today = new Date();
  var diff = today.getDate() - today.getDay() + 6;
  var lastDay = new Date(today.setDate(diff));
  return setEndTime(lastDay).toISOString();
}

function monthlyStartTime(){
  var date = new Date();
  var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);

  return setStartTime(firstDay).toISOString();
}

function monthlyEndTime(){
  var date = new Date();
  var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  return setEndTime(lastDay).toISOString();
}

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
