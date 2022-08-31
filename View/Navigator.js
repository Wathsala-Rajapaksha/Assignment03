import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenOne from '../View/ScreenOne';
import App from '../View/NewMovie';

const Stack = createNativeStackNavigator();

function app() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NewMovie">
        <Stack.Screen name="ScreenOne" component={ScreenOne} />
        <Stack.Screen name="NewMovie" component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default app;
