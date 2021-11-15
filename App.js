import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert, TouchableOpacity, ScrollView, Dimensions, Pressable, Modal } from "react-native";

import { ResetPassword, Home, Notifications, Settings, About, EditProfil, TaskForm } from "./views";
import { globalStyles } from './styles';
import { CustomSwitch, CustomButton } from './components';
import { COLORS } from "./constants"

import Navigation from "./navigation";

export default function App() {
  return (
    <Navigation />
  )
}