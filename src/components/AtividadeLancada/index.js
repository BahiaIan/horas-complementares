import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { Icon } from 'react-native-elements';
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";


export function AtividadesLancada({ dados, route, routeToReturn }) {
    const navigation = useNavigation();

    const estilo = dados.grupo == 1 ? styles.containerGrupo1 : dados.grupo == 2 ? styles.containerGrupo2 : styles.containerGrupo3;
    const botao = dados.grupo == 1 ? 'human-edit' : dados.grupo == 2 ? 'hand-extended' : 'monitor-edit';

    return (
        <TouchableOpacity style={estilo} onPress={() => navigation.navigate(`${route}`, {dados, routeToReturn})}>
            <View style={styles.btnMenu}>
                <Icon name={botao}
                    type='material-community'
                    size={64}
                    color={theme.colors.roxo.botaoRetorno}
                />
            </View>
            <Text style={styles.descricao}>
                {dados.descricao && dados.descricao.length > 30 ? `${dados.descricao.substring(0, 30)}...` : dados.descricao}
            </Text>
        </TouchableOpacity >
    )
}