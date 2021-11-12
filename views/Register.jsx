import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import Checkbox from 'expo-checkbox';

import { Input, CustomButton } from '../components';
import { registerSchema } from "../validation";
import { globalStyles } from "../styles";

const Register = () => {
  const [isChecked, setChecked] = React.useState(false);

    const { control, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(registerSchema) 
    });

    const generateUsername = (email) => {
      return email.substring(0, email.indexOf('@'))
    };

    const onRegister = data => {
      const new_data = {
        ...data,
        username: generateUsername(data.email)
      };
      console.log(new_data);
    };
    
  
    return (
      <View style={globalStyles.container}>
        <Controller control={control} name="fullName" defaultValue=""
          render={({ field: { onChange, onBlur, value } }) => (
            <Input onChange={onChange} onBlur={onBlur} value={value} placeholder="Full Name" error={errors.fullName?.message} label="Full Name" />
          )}
        />
        <Controller control={control} name="email" defaultValue=""
          render={({ field: { onChange, onBlur, value } }) => (
            <Input onChange={onChange} onBlur={onBlur} value={value} placeholder="Email" error={errors.email?.message} label="Email" />
          )}
        />
        <Controller control={control} name="password" defaultValue=""
          render={({ field: { onChange, onBlur, value } }) => (
            <Input onChange={onChange} onBlur={onBlur} value={value} placeholder="Password" error={errors.password?.message} label="Password" secureTextEntry autoCorrect={false} autoCapitalize="none" />
          )}
        />

        <View style={styles.checkboxContainer}>
          <Checkbox style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? 'coral' : "coral"}
          />
          <Text style={styles.text}> Accept conditions and term of use </Text>
        </View>
          

        <CustomButton text="Register" variant="filled" onPress={handleSubmit(onRegister)} />
      </View>
    );
  };


export default Register;

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: "#a5a5a5"
  },
  checkbox: {
    marginVertical: 10,
  },
});