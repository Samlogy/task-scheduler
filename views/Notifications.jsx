import React, {useEffect, useState} from "react";
import { View, StyleSheet, Text } from "react-native";

import { globalStyles } from '../styles';
import { CustomSwitch, CustomButton } from '../components';

const Notifications = () => {
    const [emailNotifs, setEmailNotifs] = useState(false);
    const [pushNotifs, setPushNotifs] = useState(false);

    const onLoad = () => {
        console.log('load push notifs from api')
    };

    const onNotif = () => {

    };

    useEffect(() => {
        onLoad();
    }, []);

    return (
        <View style={style.container}>
            <Text style={style.title}> Allow Notifications </Text>

            <CustomSwitch text="Email Notifications" onChange={() => setEmailNotifs(prevState => !prevState)} value={emailNotifs} />
            <CustomSwitch text="Push Notifications" onChange={() => setPushNotifs(prevState => !prevState)} value={pushNotifs} />

            <CustomButton text="Confirm" variant="filled" onPress={onNotif} />
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        padding: 25
    },
    title: {
        fontWeight: "700",
        fontSize: 18,
        marginBottom: 16
    }
})


export default Notifications;