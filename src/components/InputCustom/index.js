import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";


export function InputCustom({ placeholder }) {
    const [text, onChangeText] = React.useState("");
    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                placeholder={placeholder}
                value={text}
                onChangeText={onChangeText}>
            </TextInput>
        </View>
    )
}