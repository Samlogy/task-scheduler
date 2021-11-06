import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View } from "react-native";

const Notifications = () => {
    const [data, setData] = useState({});

    const onLoad = () => {
        console.log('load personal data from api')
    };

    return (
        <View style={styles.container}>
            <Text style={styles.subHeader}> Allow Notifications </Text>
            <View style={styles.listItem}>
                <View style={styles.item}>
                    <Text style={styles.itemLabel}> Push Notification (switch) </Text>
                </View>

                <View style={styles.item}>
                    <Text style={styles.itemLabel}> E-mail Notification (switch) </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingTop: 30
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

export default Notifications;