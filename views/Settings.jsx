import React, {useEffect, useState} from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { CustomButton } from '../components';
import { globalStyles } from "../styles";

const PersonalInfo = ({ data }) => {
    return (
        <View>
            <Text style={styles.subHeader}> My Personal Informations </Text>
            <View style={styles.listItem}>
                <View style={styles.item}>
                    <Text style={styles.itemLabel}> Full Name: </Text>
                    {/* <Text style={styles.itemValue}> {data ? data.fullName : ""} </Text> */}
                </View>

                <View style={styles.item}>
                    <Text style={styles.itemLabel}> Username: </Text>
                    {/* <Text style={styles.itemValue}> {data.username ? data.username : ""} </Text> */}
                </View>

                <View style={styles.item}>
                    <Text style={styles.itemLabel}> Email: </Text>
                    {/* <Text style={styles.itemValue}> {data.email ? data.email : ""} </Text> */}
                </View>

                <View style={styles.item}>
                    <Text style={styles.itemLabel}> Joined in: </Text>
                    {/* <Text style={styles.itemValue}> {data.createdAt ? data.createdAt : ""} </Text> */}
                </View>
            </View>
        </View>
    );
};



const Settings = ({ navigation }) => {
    const [data, setData] = useState({ fullName: "", username: "", email: "", createdAt: "" });

    const onLoad = () => {
        console.log('load personal data from api')
    };
    const onLogout = () => {
        console.log('logout')
    };

    const goAbout = () => {
        console.log('about')
        
    };
    const goEdit = () => {
        console.log('edit')
    };
    const goReset = () => {
        console.log('reset')
    };
    const goNotifications = () => {
        console.log('notifications')
    };

    // useEffect(() => {
    //     onLoad();
    // }, []);
  
    return(
        <SafeAreaView style={globalStyles.container}>
            <PersonalInfo data={data} />
            <CustomButton text="About" variant="ghost" onPress={() => navigation.navigate('About')} />
            <CustomButton text="Notifications" variant="filled" onPress={() => navigation.navigate('Notifications')} />
            <CustomButton text="Reset Password" variant="filled" onPress={() => navigation.navigate('ResetPassword')} />
            <CustomButton text="Edit Profile" variant="filled" onPress={() => navigation.navigate('EditProfil')} />
            <CustomButton text="Logout" variant="outline" onPress={() => onLogout()} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    subHeader: {
        fontSize: 20,
        fontWeight: "500",
        marginBottom: 10,
        textAlign: "left"
    },
    listItem: {
        flexDirection: "column",
    },
    item: {
        flexDirection: "row",
    },
    itemLabel: {
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "italic"
    },
    itemValue: {
        fontSize: 16,
        fontWeight: "600",
        marginLeft: ".5rem"
    },
});

export default Settings;