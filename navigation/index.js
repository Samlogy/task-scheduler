import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Ionicons, MaterialIcons  } from '@expo/vector-icons';
// views
import { Home, AuthForm, About, TaskForm, Settings } from "../views";

// views names
const loginName = "Login";
const homeName = "Home";
const addTaskName = "Add Task";
const settingsName = "Settings";
const aboutName = "About";

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let rn = route.name;

                    // if (rn === loginName) {
                    //     return focused ? 
                    //         <Entypo name="home" size={size} color={color} /> : 
                    //             <Entypo name="home" size={size} color={color} />
                    // }

                    if (rn === homeName) {
                        return focused ? 
                            <Entypo name="home" size={size} color={color} /> : 
                                <Entypo name="home" size={size} color={color} />
                    }
                    else if (rn === addTaskName) {
                        return focused ? 
                            <MaterialIcons name="add-circle-outline" size={size} color={color} /> : 
                                <MaterialIcons name="add-circle-outline" size={size} color={color} />
                    }
                    else if (rn === settingsName) {
                        return focused ? 
                            <Ionicons name="settings" size={size} color={color} /> : 
                                <Ionicons name="settings"  size={size} color={color} />
                    }
                    
                },
                })}
                screenOptions={{
                    activeTintColor: 'dodgerblue',
                    inactiveTintColor: 'grey',
                    labelStyle: { paddingBottom: 10, fontSize: 10 },
                    style: { paddingTop: 10, height: 70 }
                }}>

                <Tab.Screen name={homeName} component={Home} />
                <Tab.Screen name={addTaskName} component={TaskForm} />
                <Tab.Screen name={settingsName} component={Settings} />
                {/* <Tab.Screen name={aboutName} component={About} /> */}

            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;