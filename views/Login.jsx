import React, {useState} from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { Ionicons } from '@expo/vector-icons';

import { Input, CustomButton, Container } from '../components';
import { loginSchema } from "../validation";
import { globalStyles } from "../styles";

const Login = ({ navigation }) => {
    // const [showPassword, setShowPassword] = useState(true);

    const { control, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(loginSchema) 
    });

    const onLogin = data => {
        console.log(data);
    };
  
    return (
      <View style={globalStyles.container}>
        <Image source={require("../assets/aa.png")} style={style.logo} />
        {/* <Image source={{ uri: "https://images.unsplash.com/photo-1633655331363-c34828bcfa76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" }} style={style.logo} /> */}

        <Controller control={control} name="email" defaultValue=""
          render={({ field: { onChange, onBlur, value } }) => (
            <Input onChange={onChange} onBlur={onBlur} value={value} placeholder="Enter your Email" error={errors.email?.message} label="Email" />
          )} 
        />
  
        <Controller control={control} name="password" defaultValue=""
          render={({ field: { onChange, onBlur, value } }) => (
            <Input onChange={onChange} onBlur={onBlur} value={value} placeholder="Enter your Password" error={errors.password?.message} label="Password" />
          )}
        />
  
        <CustomButton text="Login" variant="filled" onPress={handleSubmit(onLogin)} />
        <CustomButton text="Forgot Password" variant="ghost" onPress={() => navigation.navigate('ForgotPassword')} />
        <CustomButton text="Create an Account" variant="outline" onPress={() => navigation.navigate('Register')} />
      </View>
    );
  };

  const style = StyleSheet.create({
    logo: {
      height: 125, 
      width: 125, 
      borderRadius: 25,
      marginBottom: 26,
      marginHorizontal: 120
    }
  })

export default Login;