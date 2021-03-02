import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen';
import CommentsScreen from '../screens/CommentsScreen';
import Actions from '../redux/actions';
import { useDispatch } from 'react-redux';

const Stack = createStackNavigator();

export default (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Actions.fetchUsers())
    }, [])
    return (
        <Stack.Navigator mode="card" headerMode="none">
            <Stack.Screen
                name="Home Screen"
                component={HomeScreen}
            />
            <Stack.Screen
                name="Comments"
                component={CommentsScreen}
            />
        </Stack.Navigator>
    );
};