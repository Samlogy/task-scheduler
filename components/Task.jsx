import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Task = ({ data }) => {
    return(
        <TouchableOpacity>
            <View style={styles.taskContainer}>
                <Text style={styles.taskItem}> {data.title} </Text>
                <Text style={styles.taskItem}> {data.priority} </Text>
                <Text style={styles.taskItem}> {data.completed ? "completed" : "not completed"} </Text>    
                {/* <Text style={styles.taskItem}> {data.description} </Text> */}
                <Text style={styles.taskItem}> {data.username} </Text>
                <Text style={styles.taskItem}> {data.createdAt} </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: "column",
        justifyContent: "center",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "dodgerblue",
        borderRadius: 10,
        backgroundColor: "dodgerblue",
        color: "#fff",
        marginTop: 20,
        marginBottom: 10,
        padding: 10,

    },
    taskItem: {
        fontWeight: "500",
        fontSize: 16,
        padding: 4
    }
});

export default Task;