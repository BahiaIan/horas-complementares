import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '70%',
        height: 42,
        backgroundColor: theme.colors.roxo.botao,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10

    },
    title: {
        flex: 1,
        color: theme.colors.cinza.background,
        fontSize: 15,
        textAlign: 'center'
    }
});