import React from 'react';
import { Text, TextInput, StyleSheet, View } from "react-native";


const Input = ({ onBlur, value, onChange, placeholder, error, label, ...rest }) => {


    return(
      <View style={{ marginTop: 16 }}>
      <View>
        {/* <View> {icon && icon} </View> */}
        { label && <Text style={styles.label}> {label} </Text> }
        <TextInput
          style={error ? styles.inputError : styles.input}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          {...rest}
        />
        </View>
        <Text style={styles.errorMsg}> {error} </Text>
      </View>
    )
};

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    height: 50,
    padding: 10,
    borderRadius: 4,
  },
  inputError: {
    borderColor: "red",
    borderWidth: 1,
    height: 50,
    padding: 10,
    borderRadius: 4,
  },
  errorMsg: {
    color: "red",
    marginTop: 4
  },
  label: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10
  }
});