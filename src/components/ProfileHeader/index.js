import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

export function ProfileHeader({ nome, periodo, curso }) {
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <View style={styles.title}>
                    <Text style={styles.nome}>
                        {nome}
                    </Text>

                    <Text style={styles.periodo}>
                        {periodo}º periodo
                    </Text>
                </View>
                <Text style={styles.curso}>
                    {curso}
                </Text>
            </View>
        </View>
    )
}