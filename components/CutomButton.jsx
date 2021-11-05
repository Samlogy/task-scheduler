import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from "react-native";


const CustomButton = ({ text, onPress, ...rest }) => {
    return(
      <TouchableOpacity activeOpacity={0.8} {...rest} style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}> {text} </Text>
      </TouchableOpacity>
    )
};

export default CustomButton;

const styles = StyleSheet.create({
    button: {
      marginTop: 16,
      height: 40,
      backgroundColor: 'coral',
      borderRadius: 24,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonLabel: {
      color: "#fff",
      fontWeight: "600",
      fontSize: 18
    }
});