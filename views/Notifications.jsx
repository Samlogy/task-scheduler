import React, {useEffect, useState} from "react";
import { View } from "react-native";

import { globalStyles } from '../styles';
import { CustomSwitch } from '../components';

const Notifications = () => {
    const [emailNotifs, setEmailNotifs] = useState(false);
    const [pushNotifs, setPushNotifs] = useState(false);

    const onLoad = () => {
        console.log('load personal data from api')
    };

    return (
        <View style={globalStyles.container}>
            <CustomSwitch text="Email Notifications" onChange={() => setEmailNotifs(prevState => !prevState)} value={emailNotifs} />
            <CustomSwitch text="Push Notifications" onChange={() => setPushNotifs(prevState => !prevState)} value={pushNotifs} />
        </View>
    );
};


export default Notifications;