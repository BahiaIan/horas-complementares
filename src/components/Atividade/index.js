import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";


export function Atividade({ dados }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(`Atividade`, dados)}>
            <Text style={styles.descricao}>
                {dados.abreviacao}
            </Text>
        </TouchableOpacity >
    )
}