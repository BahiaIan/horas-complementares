import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        alignItems: 'center',
        backgroundColor: theme.colors.amarelo.profileTitle,
        flexDirection: 'row'
    },
    title: {
        flexDirection: 'row',
        marginBottom: 6
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
    curso: {
        color: theme.colors.roxo.botao,
        alignItems: 'center',
        marginBottom: 8
    }
});