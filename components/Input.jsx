import React from 'react';
import { Text, TextInput, StyleSheet } from "react-native";


const Input = ({ onBlur, value, onChange, placeholder, error, ...rest }) => {
    return(
      <>
        <TextInput
          style={error ? styles.inputError : styles.input}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          {...rest}
        />
        <Text style={styles.errorMsg}> {error} </Text>
      </>
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
    marginTop: 16
  },
  inputError: {
    borderColor: "red",
    borderWidth: 1,
    height: 50,
    padding: 10,
    borderRadius: 4,
    marginTop: 16
  },
  errorMsg: {
    color: "red",
    marginTop: 4
  }
});