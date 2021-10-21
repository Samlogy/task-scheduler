import React, {useEffect, useState} from "react";
import { SafeAreaView, StyleSheet, Button, Text, View } from "react-native";

const Settings = () => {
    const [data, setData] = useState({});

    const onLoad = () => {
        console.log('load personal data from api')
    };

    const onLogout = () => {
        console.log('logout')
    };

    // useEffect(() => {
    //     onLoad();
    // }, []);

    return(
        <SafeAreaView style={styles.container}>

            <Text style={styles.subHeader}> My Personal Informations </Text>
            <View style={styles.listItem}>
                <View style={styles.item}>
                    <Text style={styles.itemLabel}> Full Name: </Text>
                    <Text style={styles.itemValue}> {data.fullName} </Text>
                </View>

                <View style={styles.item}>
                    <Text style={styles.itemLabel}> Username: </Text>
                    <Text style={styles.itemValue}> {data.username} </Text>
                </View>

                <View style={styles.item}>
                    <Text style={styles.itemLabel}> Email: </Text>
                    <Text style={styles.itemValue}> {data.email} </Text>
                </View>

                <View style={styles.item}>
                    <Text style={styles.itemLabel}> Joined in: </Text>
                    <Text style={styles.itemValue}> {data.createdAt} </Text>
                </View>
            </View>

            <Button
              style={styles.button}
              title="Logout"
              onPress={() => onLogout()}
          />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
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
    button: {
        color: "dodgerblue",
        borderRadius: 20,
        height: 40,
        width: "90%",
        backgroundColor: "red",
        color: "#fff"
    },
  });

export default Settings;