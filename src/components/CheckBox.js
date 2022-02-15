import React, { useState } from "react"
import { View, TouchableHighlight, StyleSheet, Text } from "react-native"
import { Feather } from "@expo/vector-icons"

export default props => {
    
    const [pressed, setPressed] = useState(false)
    
    const press = () => {
        if (pressed) {
            setPressed(pressed => false)
        }
        else {
            setPressed(pressed => true)
        }
    }
    
    return(
        <View style={styles.container}>
            <TouchableHighlight underlayColor="transparent" onPress={() => {press(); props.onClick()}}>
                <Feather name={pressed === false ? "square" : "x-square"} size={40} color="black"/>
            </TouchableHighlight>
            <Text style={styles.text}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        paddingLeft: 10.5,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignContent: "flex-start",
        alignItems: "center",
        width: 300,
        height: 50,
        backgroundColor: "white",
        borderRadius: 15,
        elevation: 5
    },
    text: {
        fontSize: 17,
        fontWeight: "bold",
        paddingLeft: 6.5
    }
})
