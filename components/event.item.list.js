import React, {Component} from 'react';
import {StyleSheet, Text, View, ListView} from 'react-native';
import EventItem from './event.item';

export default class EventItemList extends Component {

  componentWillMount() {
    this.createDataSource();
  }

  createDataSource() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.events);
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
              dataSource={this.dataSource}
              renderRow={this.renderRow}
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