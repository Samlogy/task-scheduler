import * as React from 'react';
import { StyleSheet, Pressable, View } from "react-native";
import { Entypo, Ionicons, MaterialIcons, FontAwesome, MaterialCommunityIcons, Feather, SimpleLineIcons  } from '@expo/vector-icons';

// Screens

//Screen names


const NavBar = () => {
  return (
    <View style={styles.navContainer}>
      <Pressable onPress={() => console.log('home')} style={styles.icon}>
        <Entypo name="home" size={30} color="black" />
      </Pressable>

      <Pressable onPress={() => console.log('add')} style={styles.icon}>
        <MaterialIcons name="add-circle-outline" size={30} color="black" />
      </Pressable>

      <Pressable onPress={() => console.log('settings')} style={styles.icon}>
        <Ionicons name="settings" size={30} color="black" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    position: "absolute",
    alignItems: "center",
    bottom: 0,
    flexDirection: "row",
    backgroundColor: "#eee",
    width: "100%",
    justifyContent: "center",
    borderRadius: 10
  },
  icon: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
    paddingLeft: "3rem",
    paddingRight: "3rem"
  }
});

export default NavBar;


{/* <MaterialIcons name="add-circle-outline" size={24} color="black" />
        <Ionicons name="settings" size={24} color="black" /> */}
        {/* <MaterialIcons name="add-circle" size={24} color="black" />
        
        <MaterialIcons name="notifications-active" size={24} color="black" />
        <MaterialIcons name="notifications" size={24} color="black" />
        <FontAwesome name="user" size={24} color="black" />
        <MaterialIcons name="email" size={24} color="black" />
        <Feather name="edit" size={24} color="black" />
        <MaterialCommunityIcons name="delete" size={24} color="black" />
        <SimpleLineIcons name="options-vertical" size={24} color="black" /> */}