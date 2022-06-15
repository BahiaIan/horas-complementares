import { StyleSheet } from "react-native";
import { theme } from "./src/global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: theme.colors.cinza.background,
        marginTop: 26
    }
})