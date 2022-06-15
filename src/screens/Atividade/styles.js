import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.cinza.background,
    },
    title:{
        fontWeight:'bold',
        marginVertical:4,
        marginLeft:10,
        fontSize:20
    },
    content:{
        marginVertical:4,
        marginLeft:20,
        fontSize:15
    }
})