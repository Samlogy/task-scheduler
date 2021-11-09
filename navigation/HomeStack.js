import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, TaskDetails } from '../views';

const Stack = createNativeStackNavigator();

const options = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTitleAlign: "center",
  headerBackVisible: true,
};

const HomeStack = () => {
    return(
        <NavigationContainer>
          <Stack.Navigator screenOptions={options}>
            <Stack.Screen name="Home" component={Home} options={{...options, title: 'Home' }} />
            <Stack.Screen name="TaskDetails" component={TaskDetails} options={{...options, title: 'Task Details' }} />
          </Stack.Navigator>
        </NavigationContainer>
    )
}

export default HomeStack;