import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import CardSection  from '../card.section';

class EventListItem extends Component {

    onRowPress() {
        this.props.onRowPress(this.props.event)
    }

    render() {
        const { title, where, when } = this.props.event;

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <View style={styles.containerStyle}>
                            <View>
                                <Text style={[styles.titleStyle, styles.heighLightStyle]}>
                                    {title}
                                </Text>
                                <Text style={styles.titleStyle}>
                                    {where}
                                </Text>
                            </View>
                            <Text>
                                {when}
                            </Text>
                        </View>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18
    },
    heighLightStyle: {
        color: '#000000'
    },
    containerStyle: {
        height: 48,
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
};

export default EventListItem;