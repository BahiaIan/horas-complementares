import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        width: '100%',
        heigth: '100%',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.amarelo.background
    },
    image: {
        width: '60%',
        height: 80,
        marginBottom: 20
    },
    content: {
        // marginTop,
    },
    subContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '80%',
        width: '80%',
        backgroundColor: theme.colors.cinza.background
    },
    title: {
        color: '#010',
        textAlign: 'center',
        fontSize: 20,
    }
})