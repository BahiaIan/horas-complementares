import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 110,
        alignItems: 'center',
    },
    perfil: {
        width: '100%',
        height: 70,
        alignItems: 'center',
        backgroundColor: theme.colors.amarelo.profileTitle,
    },
    title: {
        flexDirection: 'row',
        marginBottom: 6
    },
    grupos: {
        width: '100%',
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginHorizontal: 50,
        backgroundColor: theme.colors.roxo.botao,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    nome: {
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.colors.roxo.menu,
        marginRight: 24,
        marginLeft: 8,
    },
    periodo: {
        fontSize: 16,
        color: theme.colors.roxo.botao,
        marginTop: 8
    },
    pontos: {
        color: theme.colors.cinza.background,
        alignSelf: 'center',
        // marginBottom: 5
    },
    curso: {
        color: theme.colors.roxo.botao,
        alignItems: 'center',
        marginBottom: 8
    }
});