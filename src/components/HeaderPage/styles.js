import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        backgroundColor: theme.colors.amarelo.profileTitle,
        flexDirection: 'row'
    },
    btnMenu: {
        width: '25px',
        height: '25px',
        marginLeft: 8,
        marginRight: 20,
        backgroundColor: theme.colors.roxo.botao,
        marginTop:7
    },
    title: {
        flexDirection: 'row',
        marginBottom: 6
    },
    nome: {
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.colors.roxo.menu,
    }
});