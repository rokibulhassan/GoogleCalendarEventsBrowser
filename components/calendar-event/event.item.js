import React, { Component } from "react";
import { StyleSheet, Alert, Text } from "react-native";
import Card from '../card';
import CardSection from '../card.section';
import ShowData from '../show.data';
import Button from '../button';

export default class MemberDetails extends Component {

  onBackPress() {
    Alert.alert('Back')
    this.props.goToEventList()
  }

  render() {
    const { id, title, when, where, members, docs, privacy } = this.props.loadData;
    return (
      <Card>
          <CardSection><Text>{title}</Text></CardSection>
          <CardSection>
            <ShowData label="When" value={when} />
          </CardSection>
          <CardSection>
            <ShowData label="Where" value={where} />
          </CardSection>
          <CardSection>
            <ShowData label="Members" value={members} />
          </CardSection>
          <CardSection>
            <ShowData label="Doc & links" value={docs} />
          </CardSection>
          <CardSection>
            <ShowData label="Privacy" value={privacy} />
          </CardSection>
          <CardSection>
              <Button onPress={this.onBackPress.bind(this)}>
                  Back
              </Button>
          </CardSection>
      </Card>
  );
  }
}
