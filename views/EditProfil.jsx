import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";

import { Input, CustomButton } from '../components';
import { editProfileSchema } from "../validation";
import { globalStyles } from "../styles";

const EditProfil = () => {
  const { control, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(editProfileSchema) 
  });

  const onEdit = data => {
      console.log(data);
  };
  const onLoad = () => {
    console.log("load data from api");
  };

  return (
    <View style={globalStyles.container}>
      <Image source={require("../assets/aa.png")} style={style.avatar} />
      
      <Controller control={control} name="fullName" defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <Input onChange={onChange} onBlur={onBlur} value={value} placeholder="Full Name" error={errors.fullName?.message} />
        )}
      />

      <Controller control={control} name="email" defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <Input onChange={onChange} onBlur={onBlur} value={value} placeholder="Email" error={errors.email?.message} />
        )}
      />

      <Controller control={control} name="phone" defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <Input onChange={onChange} onBlur={onBlur} value={value} placeholder="Phone" error={errors.phone?.message} />
        )}
      />

      <CustomButton text="Edit" variant="filled" onPress={handleSubmit(onEdit)} />
    </View>
  );
};

const style = StyleSheet.create({
  avatar: {
    height: 125, 
    width: 125, 
    borderRadius: 25,
    marginBottom: 26,
    marginHorizontal: 120
  }
})

export default EditProfil;