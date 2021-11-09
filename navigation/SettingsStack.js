import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';
import { View } from "react-native";

import { Profil, EditProfil, ResetPassword } from '../views';
import { CustomBackButton } from "../components";

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


const SettingsStack = ({navigation}) => {
    return(
        <NavigationContainer>
          <Stack.Navigator screenOptions={options}>
            <Stack.Screen name="Settings" component={Profil} options={{ title: 'Settings', 
                headerRight: () => (
                  <View style={{marginRight: 5}}>
                    <MaterialIcons name="notifications" size={24} color="#fff" onPress={() => navigation.navigate('Notifications')} />
                  </View>
                ), 
              }} 
            />
            <Stack.Screen name="ResetPassword" component={ResetPassword} options={{...options, title: 'Reset Password' }} />
            <Stack.Screen name="EditProfil" component={EditProfil} options={{...options, title: 'Edit Profil' }} />
          </Stack.Navigator>
        </NavigationContainer>
    )
}

export default SettingsStack;