import React, {useEffect, useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Ionicons, FontAwesome5  } from '@expo/vector-icons';
import { COLORS } from "../constants";

// stacks
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";
import { TaskForm } from "../views";

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
            <Tab.Navigator
            tabBarOptions={{
                activeTintColor: COLORS.coral.dark,
                inactiveTintColor: '#333',
                activeBackgroundColor: COLORS.coral.light,
                inactiveBackgroundColor: 'lightgray',
                showLabel: true,
                labelStyle: { fontSize: 14 },
                showIcon: true,
              }}
              activeColor='coral'
              inactiveColor='gray'
              barStyle={{ backgroundColor: '#694fad' }}
              >
            {   isAuthenticated ?
                <>
                    <Tab.Screen name="Home" component={HomeStack} options={{
                            tabBarIcon: ({ color, size }) => (
                                <Entypo name="home" size={24} color="#333" />
                            ),
                            headerShown: false
                        }}
                    />
                    <Tab.Screen name="addTask" component={TaskForm} options={{
                            ...options, title: 'ADD TASK',
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="add" size={24} color="#333" />
                            )
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