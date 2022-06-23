import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    field: {
        width: '92%',
        margin: 12,
        backgroundColor:theme.colors.cinza.background,
        borderBottomWidth: 1,
    },
    textField: {
        fontSize:14,
    },
});