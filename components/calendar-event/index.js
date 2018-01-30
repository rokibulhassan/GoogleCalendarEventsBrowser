import React, {Component} from "react";
import {View, Text} from "react-native";
import EventList from './event.list';
import EventDetails from "./event.item";

export default class CalendarEvent extends Component {

    constructor() {
        super();
        this.events = [
            {id: 1, title: 'Himel', where: '123', when: '123', members: 'mon'},
            {id: 2, title: 'Himel', where: '123', when: '13', members: 'tue'},
            {id: 3, title: 'Himel', where: '123', when: '23', members: 'fri'},
            {id: 4, title: 'Himel', where: '123', when: '12', members: 'sun'}
        ];
        this.state = {
            listVisible: true,
            detailVisible: false
        }
        
        this.event = {}
    }


    goToEventList(){
        this.setState({
            listVisible: true,
            detailVisible: false
        })
    }

    goToMemberDetails(event) {
        this.event = event;
        this.setState({
            listVisible: false,
            detailVisible: true
        })
    }

    renderEventList() {
        if(this.state.listVisible) {
            return (
                <EventList 
                    listData={this.events}
                    goToEventDetails={this.goToEventDetails.bind(this)} 
                />
            )
        }
    }

    renderEventDetail() {
        if(this.state.detailVisible) {
            return (
                <EventDetails 
                    loadData={this.event}
                    goToEventList={this.goToEventList.bind(this)}
                />
            )
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {this.renderEventList()}
                {this.renderEventDetail()}
            </View>
        );
    }
}
