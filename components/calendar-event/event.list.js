import React, {Component} from "react";
import {ListView, View, Button} from "react-native";
import EventListItem from './event.list.item';

export default class EventList extends Component {

    constructor() {
        super();
    }

    componentWillMount() {
        this.createDataSource();
    }

    createDataSource(){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(this.props.listData);
    }

    renderRow(event) {
        return <EventListItem event={event} onRowPress={this.props.goToEventDetails}/>;
    }

    render() {
        return (
            <View>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow.bind(this)}
                />
            </View>
        );
    }
}
