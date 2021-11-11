import React, {useEffect, useState} from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { Ionicons } from '@expo/vector-icons';

import { Input, CustomButton, Container } from '../components';
import { loginSchema } from "../validation";
import { globalStyles } from "../styles";

const TaskForm = ({ route }) => {
    const { control, handleSubmit, setValue, formState: { errors } } = useForm({
    //   resolver: yupResolver(loginSchema) 
    });

    const onTask = data => {
        console.log(data);
    };

    const onLoad = () => {
        if (route.name === "EditTask") {
            const data = route.params;
            setValue('title', data.title);
            setValue('description', data.description);
            setValue('status', data.status);
            setValue('username', data.username);
            setValue('priority', data.priority);
        }
    };

    useEffect(() => {
        onLoad();
    }, []);
    // select --> status / username
  
    return (

        <View style={globalStyles.container} showsVerticalScrollIndicator={false}>
            <Controller control={control} name="title" defaultValue=""
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input onChange={onChange} onBlur={onBlur} value={value} placeholder="Enter a Title" error={errors.title?.message} label="Title" />
                )} 
            />
    
            <Controller control={control} name="description" defaultValue=""
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input onChange={onChange} onBlur={onBlur} value={value} placeholder="Enter a Description" error={errors.description?.message} label="Description" 
                        multiline numberOfLines={4} />
                )}
            />

            <Controller control={control} name="priority" defaultValue=""
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input onChange={onChange} onBlur={onBlur} value={value} placeholder="Enter a Priority" error={errors.priority?.message} label="Priority"
                        keyboardType="numeric" />
                )}
            />

            <Controller control={control} name="status" defaultValue=""
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input onChange={onChange} onBlur={onBlur} value={value} placeholder="Enter a Status" error={errors.status?.message} label="Status" />
                )}
            />

            <Controller control={control} name="username" defaultValue=""
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input onChange={onChange} onBlur={onBlur} value={value} placeholder="Enter a Username" error={errors.username?.message} label="Username" />
                )}
            />
    
            <CustomButton text="Submit" variant="filled" onPress={handleSubmit(onTask)} />
        </View>
    );
  };


export default TaskForm;