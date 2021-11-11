import React from "react";
import { View } from "react-native";

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";

import { Input, CustomButton } from '../components';
import { forgotPasswordSchema } from "../validation";
import { globalStyles } from "../styles";

const ForgotPassword = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(forgotPasswordSchema) 
    });

    const onForgot = data => {
        console.log(data);
    };
  
    return (
      <View style={globalStyles.container}>
        <Controller control={control} name="email" defaultValue=""
          render={({ field: { onChange, value } }) => (
            <Input onChange={onChange} value={value} placeholder="Email" error={errors.email?.message} label="Email" />
          )}
        />
        <CustomButton text="Submit" variant="filled" onPress={handleSubmit(onForgot)} />
      </View>
    );
  };

export default ForgotPassword;