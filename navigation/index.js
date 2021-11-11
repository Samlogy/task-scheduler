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
    const [isAuthenticated, setIsAnthenticated] = useState(false);

    const onLoad = () => {
        console.log('set authenticated value from storage/api')
    };

    useEffect(() => {
        onLoad()
    }, []);

    return(
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: 'coral',
                tabBarInactiveTintColor: 'lightgray',
              })}
              >
            {   isAuthenticated ?
                <>
                    <Tab.Screen name="Home" component={HomeStack} options={{
                            tabBarIcon: ({ focused, color, size }) => (
                                focused ? <Entypo name="home" size={28} color={COLORS.coral.dark} /> : <Entypo name="home" size={24} color={COLORS.dark} />
                            ),
                            headerShown: false,
                            tabBarBadge: 3
                        }}
                    />
                    <Tab.Screen name="addTask" component={TaskForm} options={{
                            ...options, title: 'Task',
                            tabBarIcon: ({ focused, color, size }) => (
                                focused ? <Ionicons name="add" size={28} color={COLORS.coral.dark} /> : <Ionicons name="add" size={24} color={COLORS.dark} />
                            )
                        }}
                    />
                    <Tab.Screen name="ProfileStack" component={ProfileStack} options={{
                            title: 'Profile',
                            tabBarIcon: ({ focused, color, size }) => (
                                focused ? <FontAwesome5 name="user-circle" size={28} color={COLORS.coral.dark} /> : <FontAwesome5 name="user-circle" size={24} color={COLORS.dark} />
                            ),
                            headerShown: false
                        }}
                    />
                </> :
                <Tab.Screen name="auth" component={AuthStack} options={{ headerShown: false }} 
                />
            }
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;