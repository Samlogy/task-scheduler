import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        padding: 8,
        backgroundColor: "#fff"
    },
    link: {
        color: "coral",
        fontWeight: "600",
        fontSize: 18
    },
    label: {
        color: 'white',
        margin: 20,
        marginLeft: 0,
    },
    button: {
        marginTop: 16,
        height: 40,
        backgroundColor: 'coral',
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonLabel: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 18
    },
    input: {
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        height: 50,
        padding: 10,
        borderRadius: 4,
        marginTop: 16
    },
    inputError: {
        borderColor: "red",
        borderWidth: 1,
        height: 50,
        padding: 10,
        borderRadius: 4,
        marginTop: 16
    },
    errorMsg: {
        color: "red",
        marginTop: 4
    },
    switchContainer: {
        flexDirection: "row",
        justifyContent: "center"
    },
        swicthLabel: {
        width: 150,
        fontSize: 16,
        fontWeight: "600"
    }
});