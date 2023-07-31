import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import PantryFormScreen from './screens/PantryFormScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import PreferencesForm from './screens/PreferencesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={CreateAccountScreen} />
        <Stack.Screen name="PantryForm" component={PantryFormScreen} />
        <Stack.Screen name="Preferences" component={PreferencesForm} />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerBackVisible:false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;