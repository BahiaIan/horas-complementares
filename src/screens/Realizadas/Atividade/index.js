import { useRoute } from "@react-navigation/native";
import { Text, View } from 'react-native';
import { Header } from '../../../components/Header';
import { styles } from './styles';

export function Atividade() {
    const params = useRoute().params
    return (
        <View style={styles.container}>
            <Header title={params.titulo} routeToReturn='AtividadesRealizadas' />
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
                    Pontuação:
                </Text>
                <Text style={styles.content}>
                    {params.pontuacao}
                </Text>
            </View>
            <View>
                <Text style={styles.title}>
                    Periodo da Atividade:
                </Text>
                <Text style={styles.content}>
                    {params.periodo}
                </Text>
            </View>
            <View>
                <Text style={styles.title}>
                    Grupo:
                </Text>
                <Text style={styles.content}>
                    {params.grupo}
                </Text>
            </View>
            <View>
                <Text style={styles.title}>
                    Total de Horas Realizadas:
                </Text>
                <Text style={styles.content}>
                    {params.comprovante}
                </Text>
            </View>
        </View>
    )
}