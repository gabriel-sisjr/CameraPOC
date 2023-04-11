import 'react-native-reanimated';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './Stacks/StackNavigator';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
