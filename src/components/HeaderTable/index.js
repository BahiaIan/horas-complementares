import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";


export function HeaderTable({ title, descricao, route }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={() => navigation.navigate(`${route}`)}>
            <View style={styles.title}>
                <Text style={styles.textTitle}>
                    {title}
                </Text>
            </View>
            <View style={styles.title}>
                <Text style={styles.textDescricao}>
                    {descricao}
                </Text>
            </View>
        </TouchableOpacity >
    )
}