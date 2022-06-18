import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    containerGrupo1: {
        width: 340,
        height: 120,
        marginVertical: 6,
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: theme.colors.vermelho.botao2,
    },
    containerGrupo2: {
        width: 340,
        height: 120,
        backgroundColor: theme.colors.azul.botao,
        marginVertical: 6,
        borderRadius: 5,
        justifyContent: 'center',
    },
    containerGrupo3: {
        width: 340,
        height: 120,
        backgroundColor: theme.colors.verde.botao,
        marginVertical: 6,
        borderRadius: 5,
        justifyContent: 'center',
    },
    descricao: {
        marginHorizontal: 14,
        textAlign: 'center',
        fontSize: 18,
        overflow: 'hidden',
        color: theme.colors.roxo.botaoRetorno,
    }
});