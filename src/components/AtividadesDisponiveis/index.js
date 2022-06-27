import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Icon } from 'react-native-elements';
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";


export function AtividadesDisponiveis({ dados }) {
    const navigation = useNavigation();

    const estilo = dados.grupo == 1 ? styles.containerGrupo1 : dados.grupo == 2 ? styles.containerGrupo2 : styles.containerGrupo3;
    const botao = dados.grupo == 1 ? 'human-edit' : dados.grupo == 2 ? 'hand-extended' : 'monitor-edit';

    return (
        <TouchableOpacity style={estilo} onPress={() => navigation.navigate(`AtividadeEvento`, dados)}>
            <View style={styles.btnMenu}>
                <Icon name={botao}
                    type='material-community'
                    size={64}
                    color={theme.colors.roxo.botaoRetorno}
                />
            </View>
            <Text style={styles.descricao}>
                {dados.titulo}
            </Text>
        </TouchableOpacity >
    )
}