import React from "react";
import { View } from "react-native";

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";

import { Input, CustomButton } from '../components';
import { resetPasswordSchema } from "../validation";
import { globalStyles } from "../styles";

const ResetPassword = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(resetPasswordSchema) 
    });

    const onReset = data => {
        console.log(data);
    };
  
    return (
      <View style={globalStyles.container}>
        <Controller control={control} name="password"  defaultValue=""
          render={({ field: { onChange, onBlur, value } }) => (
            <Input onChange={onChange} value={value} placeholder="Current Password" error={errors.password?.message} />
          )}
        />

        <Controller control={control} name="new_password"  defaultValue=""
          render={({ field: { onChange, onBlur, value } }) => (
            <Input onChange={onChange} value={value} placeholder="New Password" error={errors.new_password?.message} />
          )}
        />
        <CustomButton text="Submit" onPress={handleSubmit(onReset)} />
      </View>
    );
  };

export default ResetPassword;