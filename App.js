import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Screens from './src/navigation';
import getConfiguredStore from './src/redux/store';

export default (props) => {
  return (
    <Provider store={getConfiguredStore()}>
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </Provider>
  );
}