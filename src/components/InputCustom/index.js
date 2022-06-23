import React from "react";
import { TextInput, View } from "react-native";
import { styles } from "./styles";


export function InputCustom({ placeholder, security, changeText, text }) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                placeholder={placeholder}
                value={text}
                secureTextEntry={security}
                onChangeText={changeText}>
            </TextInput>
        </View>
    )
}