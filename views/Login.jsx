import React from "react";
import { View } from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";

import { Input, CustomButton } from '../components';
import { loginSchema } from "../validation";
import { globalStyles } from "../styles";

const Login = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(loginSchema) 
    });

    const onLogin = data => {
        console.log(data);
    };
  
    return (
      <View style={globalStyles.container}>
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
  
        <CustomButton text="Login" onPress={handleSubmit(onLogin)} />
      </View>
    );
  };

export default Login;