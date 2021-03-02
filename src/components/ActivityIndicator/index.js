import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native'
import Styles  from './Style'

export default props => {
    return (
        <View style={Styles.wrapper}>
            <ActivityIndicator size="large" color="black"/>
            {
                props.message &&
                <Text>
                    {props.message}
                </Text>
            }
        </View>
    );
}