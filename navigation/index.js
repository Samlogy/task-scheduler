import React, {useEffect, useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Ionicons, FontAwesome5  } from '@expo/vector-icons';

// stacks
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";
// import { ResetPassword, Home, Notifications, Profil, About, EditProfil, } from "../views";


const Tab = createBottomTabNavigator();

const Navigation = () => {
    const [isAuthenticated, setIsAnthenticated] = useState(true);

    const onLoad = () => {
        console.log('set authenticated value from storage/api')
    };

    useEffect(() => {
        onLoad()
    }, []);

    return(
        <NavigationContainer>
            <Tab.Navigator>
            {   isAuthenticated ?
                <>
                    <Tab.Screen name="Home" component={HomeStack} options={{
                            tabBarIcon: ({ color, size }) => (
                                <Entypo name="home" size={24} color="#333" />
                            ),
                            headerShown: false
                        }}
                    />
                    <Tab.Screen name="ProfileStack" component={ProfileStack} options={{
                            tabBarIcon: ({ color, size }) => (
                                <FontAwesome5 name="user-circle" size={24} color="#333" />
                            ),
                            headerShown: false
                        }}
                    />
                </> :
                <Tab.Screen name="auth" component={AuthStack} options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="add" size={24} color="#333" />
                        ),
                        headerShown: false
                    }} 
                />
            }
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;