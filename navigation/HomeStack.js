import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import { Home, TaskDetails, TaskForm, About } from '../views';

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

const HomeStack = ({ navigation }) => {
    return(
      <Stack.Navigator screenOptions={{options, headerRight: () => (
          <View style={{marginRight: 5}}>
            <FontAwesome name="question" size={24} color="#fff" onPress={() => navigation.navigate('About')}/>
          </View>
        )}}>
        <Stack.Screen name="Home" component={Home} options={{ ...options, title: 'Home' }} />
        <Stack.Screen name="TaskDetails" component={TaskDetails} options={{...options, title: 'Task Details' }} />
        <Stack.Screen name="EditTask" component={TaskForm} options={{...options, title: 'Edit Task' }} />
        <Stack.Screen name="About" component={About} options={{...options, title: 'About' }} />
      </Stack.Navigator>
    )
}

export default HomeStack;