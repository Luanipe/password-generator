import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"

export default props => {
    return(
        <TouchableOpacity style={styles.button} onPress={props.onClick}>
            <Text style={styles.text}>Generate Password</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 300,
        height: 60,
        backgroundColor: "black",
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        elevation: 5
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white"
    }
})