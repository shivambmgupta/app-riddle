import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen';
import CommentsScreen from '../screens/CommentsScreen';
import Actions from '../redux/actions';
import { useDispatch } from 'react-redux';
import * as Consts from '../constants/constans';

const Stack = createStackNavigator();

// Fetching users list in this screen, 
// because technically we should have user lists before getting to Home screen.

export default (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Actions.fetchUsers())
    }, [])
    return (
        <Stack.Navigator mode="card" headerMode="none">
            <Stack.Screen
                name={Consts.HOME_SCREEN}
                component={HomeScreen}
            />
            <Stack.Screen
                name={Consts.COMMENT_SCREEN}
                component={CommentsScreen}
            />
        </Stack.Navigator>
    );
};