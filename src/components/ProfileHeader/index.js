import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

export function ProfileHeader({ perfil }) {
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <View style={styles.title}>
                    <Text style={styles.nome}>
                        {perfil.nome}
                    </Text>

                    <Text style={styles.periodo}>
                        {perfil.periodo}º periodo
                    </Text>
                </View>
                <Text style={styles.curso}>
                    {perfil.curso}
                </Text>
            </View>
        </View>
    )
}