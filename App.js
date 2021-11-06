import React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";

import { ResetPassword, Home, Notifications, Settings, About, EditProfil } from "./views";
import SettingsStack from "./navigation/SettingsStack";
import AuthStack from "./navigation/AuthStack";



export default function App() {
  return (
    <AuthStack />
  );
};


      {/* <FilterContainer filterList={["data", "science", "web", "front", "back"]} /> */}
      {/* <AuthForm /> */}
      {/* <Task /> */}
      {/* <NavBar /> */}
      {/* <TaskForm /> */}
      {/* <Settings /> */}
