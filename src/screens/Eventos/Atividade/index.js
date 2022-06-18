import { useRoute } from "@react-navigation/native";
import { Text, View } from 'react-native';
import { Header } from '../../../components/Header';
import { styles } from './styles';

export function Atividade() {
    const params = useRoute().params
    return (
        <View style={styles.container}>
            <Header title={params.titulo} routeToReturn='Disponiveis' />
            <View>
                <Text style={styles.title}>
                    Descrição:
                </Text>
                <Text style={styles.content}>
                    {params.descricao}
                </Text>
            </View>
            <View>
                <Text style={styles.title}>
                    Local da Atividade:
                </Text>
                <Text style={styles.content}>
                    {params.local}
                </Text>
            </View>
            <View>
                <Text style={styles.title}>
                    Requisitos para Certificação:
                </Text>
                <Text style={styles.content}>
                    {params.requisitoConclusao}
                </Text>
            </View>
            <View>
                <Text style={styles.title}>
                    Atividade do Grupo {params.grupo}
                </Text>
            </View>
        </View>
    )
}