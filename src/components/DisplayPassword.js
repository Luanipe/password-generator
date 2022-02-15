import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default props => {
    return(
        <View style={styles.display}>
            <Text style={styles.text} selectable={true} numberOfLines={1} onPress={props.onClick}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    display: {
        width: 300,
        height: 60,
        backgroundColor: "white",
        borderRadius: 40,
        borderColor: "black",
        borderWidth: 4.3,
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
        marginBottom: 15
    },
    text: {
        fontSize: 16
    }
})