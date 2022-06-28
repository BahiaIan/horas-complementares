import { onValue, ref } from 'firebase/database';
import { useEffect } from "react";
import { Text, View } from "react-native";
import { db } from "../../config/firebaseConfig";
import { styles } from "./styles";

export function ProfileHeader({ id }) {
    let perfil = {};
    let progress = {}
    useEffect(() => {
        const userRef = ref(db, `/usuario/${id}/dadosPessoais`);
        onValue(userRef, (snapshot) => {
            perfil = snapshot;
        });
        const progressRef = ref(db, `/usuario/${id}/atividadesLancadas`);
        onValue(progressRef, (snapshot) => {
            progress = snapshot;
        });
    })

    perfil = {
        nome: 'Ian Carlos Rocha Lima',
        periodo: '7',
        curso: 'Bacharelado em Engenharia de Software',
    }
    progress = {
        pontosGrupo1: 27,
        pontosGrupo2: 10,
        pontosGrupo3: 22,
    }

    return (
        <View style={styles.container}>
            <View style={styles.perfil}>
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
            <View style={styles.grupos}>
                <View>
                    <Text style={styles.pontos}>
                        Grupo 1
                    </Text>
                    <Text style={styles.pontos}>
                        {progress.pontosGrupo1} pontos
                    </Text>
                </View>
                <View>
                    <Text style={styles.pontos}>
                        Grupo 2
                    </Text>

                    <Text style={styles.pontos}>
                        {progress.pontosGrupo2} pontos
                    </Text>
                </View>
                <View>
                    <Text style={styles.pontos}>
                        Grupo 3
                    </Text>
                    <Text style={styles.pontos}>
                        {progress.pontosGrupo3} pontos
                    </Text>
                </View>

            </View>
        </View>
    )
}