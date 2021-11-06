import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

const About = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}> 
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea harum, delectus dignissimos vero enim nesciunt quis, nulla minima accusantium beatae doloremque tenetur, dicta nisi! Quis, natus. Nobis ipsa iure quas! 
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 30
  },
  header: {
    fontSize: 30,
    fontWeight: "600",
    padding: 16
  },
  text: {
    fontSize: 16,
    padding: 16
  }
});

export default About;