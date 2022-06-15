import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginTop: 20,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.roxo.menu,
        borderRadius: 10,
    },
    btnMenu: {
        backgroundColor: theme.colors.roxo.botao,
        marginTop: 6,
        flex: 1
    },
    title: {
        marginBottom: 6,
        alignItems: 'center'
    },
    textTitle: {
        marginBottom: 18,
        fontSize: 18,
        color: theme.colors.cinza.background,
    },
    textDescricao: {
        fontSize: 14,
        marginHorizontal:8,
        textAlign: 'center',
        color: theme.colors.cinza.background
    }
});