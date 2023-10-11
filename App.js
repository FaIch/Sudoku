import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import GameScreen from './screens/GameScreen';
import HowToPlayScreen from './screens/HowToPlayScreen'
import DifficultyScreen from "./screens/DifficultyScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Main">
              <Stack.Screen name="Main" component={MainScreen} />
              <Stack.Screen name="Game" component={GameScreen} />
              <Stack.Screen name="Difficulty" component={DifficultyScreen} />
              <Stack.Screen name="HowToPlay" component={HowToPlayScreen} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}
