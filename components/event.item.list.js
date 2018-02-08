import React, {Component} from 'react';
import {StyleSheet, Text, View, ListView} from 'react-native';
import EventItem from './event.item';
import RNCalendarEvents from 'react-native-calendar-events';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});
export default class EventItemList extends Component {

  constructor (props) {
         super (props);
  
        this.state = {
          events: [],
          dataSource: ds.cloneWithRows([])
        };
      }

  componentWillMount() {
    this.createDataSource();
    this.fetchEvents();
  }

  componentDidUpdate(){
    console.log("componentDidUpdate")
  }

 fetchEvents() {
    RNCalendarEvents.findCalendars ()
        .then (calendars => {
          // handle calendars
          for (let calendar of calendars) {
            if(calendar.isPrimary){
              this.fetchCalendarEvents(calendar.id)
              break;
            }
          }
          //console.log(calendars)
        })
        .catch (error => {
          console.log ('Fetch calender error ' + error);
        });
  }
  
 fetchCalendarEvents(id) {
    console.log("start time "+this.props.startDate)
    console.log("end time "+this.props.endDate)

    eventList = [];
    RNCalendarEvents.fetchAllEvents (
        this.props.startDate,
        this.props.endDate,
        [id]
    )
        .then (events => {
          console.log("events "+JSON.stringify(events))
          this.setState({
              events: events
          }, () => {
            this.createDataSource();
          });
        })
        .catch (error => {
          console.log ('Fetch calender event error ' + error);
        });
  
  return eventList;
  }

  createDataSource() {
    this.setState({
      dataSource: ds.cloneWithRows(this.state.events)
    });
  }

  renderRow(event) {
    return <EventItem event={event}/>;
  }

  render() {
    return (
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <Text style={styles.title}> Time </Text>
            <Text style={styles.title}> Description </Text>
          </View>
          <ListView
              dataSource={this.state.dataSource}
              renderRow={(event) => this.renderRow(event)}
          />
        </View>

    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 60,
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