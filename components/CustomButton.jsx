import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from "react-native";


const CustomButton = ({ text, onPress, variant, isLoading, ...rest }) => {
    return(
      <TouchableOpacity activeOpacity={0.8} {...rest} style={variant === "filled" ? styles.buttonFilled : variant === "outline" ? styles.buttonOutline : variant === "ghost" ? styles.buttonGhost : styles.buttonFilled} onPress={onPress}>
        <Text style={variant === "filled" ? styles.buttonLabel : styles.buttonLabelCustom}> 
          { isLoading ? "Loading..." : text } 
        </Text>
      </TouchableOpacity>
    )
};

export default CustomButton;

const styles = StyleSheet.create({
    buttonFilled: {
      marginTop: 16,
      height: 40,
      backgroundColor: 'coral',
      borderWidth: 1,
      borderColor: "coral",
      borderRadius: 24,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonOutline: {
      marginTop: 16,
      height: 40,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: "coral",
      borderRadius: 24,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonGhost: {
      marginTop: 16,
      height: 40,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: "white",
      borderRadius: 24,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonLabel: {
      color: "white",
      fontWeight: "600",
      fontSize: 18
    },
    buttonLabelCustom: {
      color: "coral",
      fontWeight: "600",
      fontSize: 18
    }
});