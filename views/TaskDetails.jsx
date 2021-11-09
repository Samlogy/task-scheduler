import React, {useEffect, useState} from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions } from "react-native";

import { CustomButton } from '../components';
import { globalStyles } from "../styles";

const {width} = Dimensions.get('screen');
const imgMargin = (width - 125) / 2;

const TaskDetails = ({ navigation, route }) => {
    const data = route.params;
    
    return(
        <View style={globalStyles.container}>
            <Image source={require("../assets/aa.png")} style={style.img} />

            <Text> {data.title} </Text>
            <Text> {data.description} </Text>
            <Text> {data.priority} </Text>
            <Text> {data.status} </Text>    
            <Text> {data.username} </Text>
            <Text> {data.createdAt} </Text>
            <CustomButton text="Edit" variant="filled" onPress={() => navigation.navigate('TaskForm')} />
            <CustomButton text="Delete" variant="outline" onPress={() => {}} />
        </View>
    )
}

const style = StyleSheet.create({
    img: {
      height: 125, 
      width: 125, 
      borderRadius: 25,
      marginBottom: 26,
      marginHorizontal: imgMargin
    }
  })

export default TaskDetails;