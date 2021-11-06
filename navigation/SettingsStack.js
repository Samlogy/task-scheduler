import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Header } from '../components';
import { Settings, About, Notifications, EditProfil, ResetPassword } from '../views';


const Stack = createNativeStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    justifyContent: "center",
    alignItems: "center"
  },
};

const SettingsStack = () => {
    return(
        <NavigationContainer>
          <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Settings" component={Settings} options={{ title: 'Settings' }} />
            <Stack.Screen name="About" component={About} options={{ title: 'About' }} />
            <Stack.Screen name="Notifications" component={Notifications} options={{ title: 'Notifications' }} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ title: 'Reset Password' }} />
            <Stack.Screen name="EditProfil" component={EditProfil} options={{ title: 'Edit Profil' }} />
          </Stack.Navigator>
        </NavigationContainer>
    )
}

export default SettingsStack;