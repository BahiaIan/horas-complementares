import { StyleSheet } from 'react-native';
import { theme } from '../../../global/styles/theme';


export const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        width: '100%',
        heigth: '100%',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: theme.colors.cinza.background
    },
    image: {
        width: '60%',
        height: 80,
        marginBottom: 20
    },
    linha: {
        flexDirection: 'row',
    },
    select: {
        width: '50%',
    },
    title: {
        alignItems: 'center',
        width: '100%',
        backgroundColor: theme.colors.roxo.field
    }
})