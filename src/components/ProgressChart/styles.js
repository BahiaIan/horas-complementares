import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.cinza.table,
        marginVertical:10,
        borderRadius:6,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontWeight:'bold',
        marginTop:10,
        marginBottom:20,
        fontSize:20,
        color: theme.colors.roxo.menu
    },
    content:{
        marginVertical:4,
        marginLeft:20,
        fontSize:15
    }
})