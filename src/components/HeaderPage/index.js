import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

export function HeaderPage({ title }) {
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <View style={styles.title}>
                    <View style={styles.btnMenu}>

                    </View>
                    <Text style={styles.nome}>
                        {title}
                    </Text>
                </View>
            </View>
        </View>
    )
}