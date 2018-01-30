import { StackNavigator } from 'react-navigation';

import LoginScreen from "./components/login";
import EventListScreen from "./components/calendar-event/event.list";
import EventDetailsScreen from "./components/calendar-event/event.item";

const MainScreen = StackNavigator({
  EventList: {
    screen: EventListScreen,
    navigationOptions: {
      headerTitle: 'Event List'
    }
  },
  EventDetails: {
    screen: EventDetailsScreen,
    navigationOptions: {
      headerTitle: 'Event'
    },
  },
});

const RootNavigator = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
      headerTitle: 'Login'
    }
  },
  Main: {
    screen: MainScreen,
    navigationOptions: {
      header: null,
      headerTitle: 'Main'
    }
  },
});

export default RootNavigator;
