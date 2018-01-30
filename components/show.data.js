import React from 'react';
import { View, Text } from 'react-native';

const ShowData = ({ label, value }) => (
    <View style={styles.containerStyle}>
        <Text style={styles.labelStyle}>{label}:</Text>
        <Text style={styles.contentStyle}>{value}</Text>
    </View>
);

const styles = {
    contentStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export default ShowData;