import { useRoute } from "@react-navigation/native";
import { Text, View } from 'react-native';
import { Header } from '../../../components/Header';
import { styles } from './styles';

export function Atividade() {
    const params = useRoute().params
    return (
        <View style={styles.container}>
            <Header title={params.titulo} routeToReturn='Groups' />
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
                    Unidade:
                </Text>
                <Text style={styles.content}>
                    {params.unidade}
                </Text>
            </View>
            <View>
                <Text style={styles.title}>
                    Pontuação Máxima por Semestre:
                </Text>
                <Text style={styles.content}>
                    {params.maxSemestre}
                </Text>
            </View>
            <View>
                <Text style={styles.title}>
                    Comprovante:
                </Text>
                <Text style={styles.content}>
                    {params.comprovante}
                </Text>
            </View>
        </View>
    )
}