import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import GameScreen from './screens/GameScreen';
import HowToPlayScreen from './screens/HowToPlayScreen'
import DifficultyScreen from "./screens/DifficultyScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
      <I18nextProvider i18n={i18n}>
          <NavigationContainer>
              <Stack.Navigator initialRouteName="Main">
                  <Stack.Screen name="Main" component={MainScreen} />
                  <Stack.Screen name="Game" component={GameScreen} />
                  <Stack.Screen name="Difficulty" component={DifficultyScreen} />
                  <Stack.Screen name="HowToPlay" component={HowToPlayScreen} />
              </Stack.Navigator>
          </NavigationContainer>
      </I18nextProvider>
  );
}
