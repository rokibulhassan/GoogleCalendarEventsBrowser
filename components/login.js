import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Card from './card';
import CardSection from './card.section';
import Input from './input';
import Button from './buttons';

export default class Login extends Component {

    constructor() {
        super()
        this.emailAddress = '';
        this.password = '';
    }

    onEmailChange(text) {
        this.emailAddress = text;
    }

    onPasswordChange(text) {
        this.password = text;
    }

    onButtonPress() {
        if (this.emailAddress.length > 0 && this.password.length > 0) {
            this.props.goToMember();
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}
