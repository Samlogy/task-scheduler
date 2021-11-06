import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Ionicons, MaterialIcons  } from '@expo/vector-icons';

// stacks
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";
import SettingsStack from "./SettingsStack";


const Tab = createBottomTabNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="auth" component={AuthStack} />
                <Tab.Screen name="home" component={HomeStack} />
                <Tab.Screen name="SettingsStack" component={SettingsStack} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;