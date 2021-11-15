import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Task = ({ data, onPress }) => {
    return(
        <TouchableOpacity onPress={onPress} key={data.title}>
            <View style={styles.taskContainer}>
                <Text style={styles.taskItem}> {data.title} </Text>
                <Text style={styles.taskItem}> {data.priority} </Text>
                <Text style={styles.taskItem}> {data.status} </Text>    
                <Text style={styles.taskItem}> {data.username} </Text>
                <Text style={styles.taskItem}> {data.createdAt} </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    taskContainer: {
        padding: 10,
        marginTop: 16,
        borderRadius: 8,
        flexDirection: "row",
        flexWrap: "wrap", 
        justifyContent: "space-around",
        elevation: .25
    },
    taskItem: {
        fontWeight: "500",
        fontSize: 16,
        padding: 4,
        textAlign: "left"
    }
});

export default Task;