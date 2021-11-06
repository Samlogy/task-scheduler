import React from "react";
import { StyleSheet, View } from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";

import { Input, CustomButton } from '../components';
import { editProfileSchema } from "../validation";
import { globalStyles } from "../styles";

const EditProfil = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(editProfileSchema) 
  });

  const onEdit = data => {
      console.log(data);
  };

  return (
    <View style={globalStyles.container}>
      {/* avatar image is required   */}
      
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

      <Controller control={control} name="phone" defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <Input onChange={onChange} value={value} placeholder="Phone" error={errors.phone?.message} />
        )}
      />

      <CustomButton text="Edit" variant="filled" onPress={handleSubmit(onEdit)} />
    </View>
  );
};

export default EditProfil;