import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ForgotPassword, Login, Register } from '../views';
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


const AuthStack = () => {
    return(
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
          <Stack.Screen name="Register" component={Register} options={{...options, title: 'Create an account' }} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{...options, title: 'Forgot Password'}} />
        </Stack.Navigator>
    )
}

export default AuthStack;