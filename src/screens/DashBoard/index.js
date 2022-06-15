import { View, ScrollView, Text } from 'react-native';
import { ProfileHeader } from '../../components/ProfileHeader';
import { ProgressChart } from '../../components/ProgressChart';
import { styles } from './styles';

const perfil = {
    nome: 'Ian Carlos Rocha Lima',
    periodo: '7',
    curso: 'Bacharelado em Engenharia de Software',
    progress: {
        grupo1: 27,
        grupo2: 5,
        grupo3: 13,
    }
}

export function DashBoard() {
    return (
        <View style={styles.container}>
            <ProfileHeader nome={perfil.nome} periodo={perfil.periodo} curso={perfil.curso} />
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles.chatCard}>
                    <ProgressChart pontuacao={perfil.progress.grupo1} titulo='Grupo 1' />
                </View>
                <View style={styles.chatCard}>
                    <ProgressChart pontuacao={perfil.progress.grupo2} titulo='Grupo 2' />
                </View>
                <View style={styles.chatCard}>
                    <ProgressChart pontuacao={perfil.progress.grupo3} titulo='Grupo 3' />
                </View>
            </ScrollView>
        </View>
    )
}