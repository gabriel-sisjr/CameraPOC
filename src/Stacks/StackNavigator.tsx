import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../Home';
import ResultPage from '../ResultPage';
import Scanner from '../Scanner';

const Stack = createNativeStackNavigator();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Scanner" component={Scanner} />
      <Stack.Screen name="ResultPage" component={ResultPage} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
