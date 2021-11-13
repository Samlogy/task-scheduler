import React, {useEffect, useState} from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import { Entypo } from '@expo/vector-icons';

import { CustomButton } from '../components';
import { globalStyles } from "../styles";
import { COLORS } from "../constants"



const Profil = ({ navigation }) => {
    const [data, setData] = useState({ address: "Tizi-Ouzou, Algeria", phone: "213 540498180", email: "senanisammy@gmail.com", username: "Sam", fullName: "Senani Samy", userId: "@j_doe", avatar: require("../assets/aa.png") });

    const onLogout = () => {
        console.log("logout")
    };
    const onLoad = () => {
        console.log('on load data')
    };
    // useEffect(() => {
    //     onLoad()
    // }, []);

    return(
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}> 
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Image source={data.avatar} style={styles.avatar} />
  
          <View style={{marginLeft: 20}}>
            <Text style={styles.title}> {data.fullName} </Text>
            <Text style={styles.caption}> {data.userId} </Text>
          </View>
        </View>
      </View>
  
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Entypo name="user" size={24} color="#333" />
          <Text style={{color:"#777", marginLeft: 20, fontSize: 17}}> {data.username} </Text>
        </View>

        <View style={styles.row}>
          <Entypo name="email" size={24} color="#333" />
          <Text style={{color:"#777", marginLeft: 20, fontSize: 17}}> {data.email} </Text>
        </View>

        <View style={styles.row}>
          <Entypo name="phone" size={24} color="#333" />
          <Text style={{color:"#777", marginLeft: 20, fontSize: 17}}> {data.phone} </Text>
        </View>
      </View>
  
      <View style={styles.userInfoSection}>
          <CustomButton text="Edit Profile" variant="filled" onPress={() => navigation.navigate('EditProfil', data)} />
          <CustomButton text="Reset Password" variant="filled" onPress={() => navigation.navigate('ResetPassword')} />
          <CustomButton text="Logout" variant="outline" onPress={() => onLogout()} />
      </View>
    </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 35,
      paddingHorizontal: 0,
      backgroundColor: "#fff"
    },
    avatar: {
      height: 125, 
      width: 125, 
      borderRadius: 75
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: "#333",
      marginTop:15,
      marginBottom: 5,
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500',
      color: "#333"
    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginBottom: 25,
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10,
    }
});

export default Profil;