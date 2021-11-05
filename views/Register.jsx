import React from "react";
import { View } from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";

import { Input, CustomButton, Text } from '../components';
import { registerSchema } from "../validation";
import { globalStyles } from "../styles";

const Register = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(registerSchema) 
    });

    const onRegister = data => {
      console.log(data);
    };
  
    return (
      <View style={globalStyles.container}>
        <Controller control={control} name="fullName" defaultValue=""
          render={({ field: { onChange, onBlur, value } }) => (
            <Input onChange={onChange} value={value} placeholder="Full Name" error={errors.fullName?.message} />
          )}
        />
        <Controller control={control} name="email" defaultValue=""
          render={({ field: { onChange, onBlur, value } }) => (
            <Input onChange={onChange} value={value} placeholder="Email" error={errors.email?.message} />
          )}
        />
        <Controller control={control} name="password" defaultValue=""
          render={({ field: { onChange, onBlur, value } }) => (
            <Input onChange={onChange} value={value} placeholder="Password" error={errors.password?.message} secureTextEntry />
          )}
        />
        <CustomButton text="Register" onPress={handleSubmit(onRegister)} />

        {/* <Text style={globalStyles.link}> Login </Text> */}
      </View>
    );
  };

export default Register;