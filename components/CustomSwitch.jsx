import React from 'react';
import { Text, View, Switch } from "react-native";

import { globalStyles } from '../styles';

const CustomSwitch = ({ text, onChange, value }) => {
  return(
    <View style={globalStyles.switchContainer}>
      <Text style={globalStyles.swicthLabel}> {text} </Text>
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

export default CustomSwitch;