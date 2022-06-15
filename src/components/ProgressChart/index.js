import React from "react";
import { View, Text } from "react-native";
import { ProgressCircle } from 'react-native-svg-charts'
import { styles } from "./styles";

export function ProgressChart({ pontuacao, titulo }) {
    const porcentagem = pontuacao / 30;
    const cor = pontuacao < 20 ? pontuacao < 12 ? 'red' : 'orange' : 'green'
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {titulo}
            </Text>
            <View>
                <ProgressCircle style={{ height: 160 }} progress={porcentagem} progressColor={cor} />
            </View>
        </View>
    )
}
