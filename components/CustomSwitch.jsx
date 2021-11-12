import React from 'react';
import { Text, View, Switch, StyleSheet } from "react-native";

const CustomSwitch = ({ text, onChange, value }) => {
  return(
    <View style={styles.switchContainer}>
      <Text style={styles.swicthLabel}> {text} </Text>
      <Switch
        trackColor={{ false: "lightgray", true: "#ebb8b8" }}
        thumbColor={value ? "coral" : "gray"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onChange}
        value={value}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  switchContainer: {
      flexDirection: "row",
      justifyContent: "space-between"
  },
  swicthLabel: {
      width: 150,
      fontSize: 17,
      fontWeight: "500",
      color: "#333"
  }
});

export default CustomSwitch;