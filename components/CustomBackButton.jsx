import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from "react-native";

const CustomBackButton = () => {
    return (
      <View style={styles.backButton}>
        <Ionicons name="chevron-back" size={24} color="#fff" />
        <Text style={styles.backButtonText}> Back </Text>
      </View>
    );
};

export default CustomBackButton;

const styles = StyleSheet.create({
    backButton: {
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent:"flex-start" 
    },
    backButtonText: {
        fontWeight: "bold",
        color: "#fff", 
        fontSize: 18 
    }
});