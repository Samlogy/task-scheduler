import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert, TouchableOpacity, ScrollView, Dimensions, Pressable, Modal } from "react-native";
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import { ResetPassword, Home, Notifications, Settings, About, EditProfil, TaskForm } from "./views";
import { globalStyles } from './styles';
import { CustomSwitch, CustomButton } from './components';
import { COLORS } from "./constants"

import Navigation from "./navigation";

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});

export default function App() {

  return(
    <Navigation />
  )

}

 



const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});