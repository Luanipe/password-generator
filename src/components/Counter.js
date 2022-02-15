import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { AntDesign } from "@expo/vector-icons"

export default props => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttons} onPress={props.onClickMinus}>
                <AntDesign name="minuscircleo" style={{borderColor: "black", borderWidth: 0.5, borderRadius: 50}} size={39.5} color="black" />
            </TouchableOpacity>
            <Text style={styles.text}>{props.children}</Text>
            <TouchableOpacity style={styles.buttons} onPress={props.onClickPlus}>
                <AntDesign name="pluscircleo" style={{borderColor: "black", borderWidth: 0.5, borderRadius: 50}} size={39.5} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 75,
        top: 15
    },
    buttons: {
        width: 40,
        height: 40,
        backgroundColor: "white",
        borderRadius: 50,
        elevation: 3
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
        alignItems: "center",
        bottom: 2.5
    }
})