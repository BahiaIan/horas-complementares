import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: 340,
        height: 80,
        backgroundColor: theme.colors.cinza.table,
        marginVertical: 6,
        borderRadius: 5,
        justifyContent: 'center',
    },
    descricao: {
        marginHorizontal: 14,
        textAlign: 'center',
        fontSize: 14,
        overflow: 'hidden',
        color: theme.colors.roxo.menu,
    }
});