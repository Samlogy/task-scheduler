import React, {useState} from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { Ionicons } from '@expo/vector-icons';

import { Input, CustomButton } from '../components';
import { loginSchema } from "../validation";
import { globalStyles } from "../styles";

const Login = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(true);

    const { control, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(loginSchema) 
    });

    const onLogin = data => {
        console.log(data);
    };
  
    return (
      <View style={globalStyles.container}>
        <Image source={require("../assets/aa.png")} style={style.logo} />

        <Controller control={control} name="email" defaultValue=""
          render={({ field: { onChange, onBlur, value } }) => (
            <Input onChange={onChange} onBlur={onBlur} value={value} placeholder="Email" error={errors.email?.message} />
          )} 
        />
  
        <Controller control={control} name="password" defaultValue=""
          render={({ field: { onChange, onBlur, value } }) => (
            <Input onChange={onChange} onBlur={onBlur} value={value} placeholder="Password" error={errors.password?.message} secureTextEntry 
            iconPosition="right"
            icon={
              <TouchableOpacity onPress={() => setShowPassword((prevState) => !prevState)}>
                <Text> { showPassword ? 
                          <Ionicons name="ios-eye-sharp" size={24} color="black" /> : 
                            <Ionicons name="ios-eye-off-sharp" size={24} color="black" /> } </Text>
              </TouchableOpacity>
            }
            />
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